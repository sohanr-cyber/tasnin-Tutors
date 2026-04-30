import nextConnect from "next-connect";
import db from "@/database/connection";
import Tutor from "@/database/model/Tutor";
import { buildLocationFromCoords } from "@/utility/helper";

const handler = nextConnect();

// =========================
// CREATE TUTOR
// =========================
handler.post(async (req, res) => {
    try {
        await db.connect();

        const { location, ...rest } = req.body;

        const coordinates = location?.coordinates;

        if (!coordinates || coordinates.length !== 2) {
            return res.status(400).json({
                success: false,
                message: "Coordinates required [lng, lat]",
            });
        }

        const [lng, lat] = coordinates;

        const fullLocation = await buildLocationFromCoords(lat, lng);

        if (!fullLocation) {
            return res.status(400).json({
                success: false,
                message: "Invalid location",
            });
        }

        const tutor = await Tutor.create({
            ...rest,
            location: fullLocation,
        });

        return res.status(201).json({
            success: true,
            data: tutor,
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Failed to create tutor",
        });
    }
});


// =========================
// UPDATE TUTOR (FULL OR PARTIAL)
// =========================
handler.patch(async (req, res) => {
    try {
        await db.connect();

        const { tutorId, location, ...updateData } = req.body;

        if (!tutorId) {
            return res.status(400).json({
                success: false,
                message: "Tutor ID required",
            });
        }

        let finalLocation = undefined;

        // 🔥 if location update is included
        if (location?.coordinates) {
            const [lng, lat] = location.coordinates;

            finalLocation = await buildLocationFromCoords(lat, lng);

            if (!finalLocation) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid coordinates",
                });
            }
        }

        const updated = await Tutor.findByIdAndUpdate(
            tutorId,
            {
                ...updateData,
                ...(finalLocation && { location: finalLocation }),
            },
            { new: true }
        );

        return res.status(200).json({
            success: true,
            data: updated,
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Failed to update tutor",
        });
    }
});


// =========================
// GET ALL TUTORS (FILTERABLE)
// =========================
handler.get(async (req, res) => {
    try {
        await db.connect();

        const {
            status,
            area,
            district,
            city,
            limit = 20,
            page = 1,
        } = req.query;

        const query = {};

        if (status) query.status = status;
        if (area) query["location.area"] = area;
        if (district) query["location.district"] = district;
        if (city) query["location.city"] = city;

        const tutors = await Tutor.find(query)
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(Number(limit));

        const total = await Tutor.countDocuments(query);

        return res.status(200).json({
            success: true,
            data: tutors,
            pagination: {
                total,
                page: Number(page),
                limit: Number(limit),
            },
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch tutors",
        });
    }
});


// =========================
// GET SINGLE TUTOR
// =========================
handler.get(async (req, res) => {
    try {
        await db.connect();

        const { id } = req.query;

        const tutor = await Tutor.findById(id);

        if (!tutor) {
            return res.status(404).json({
                success: false,
                message: "Tutor not found",
            });
        }

        return res.status(200).json({
            success: true,
            data: tutor,
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch tutor",
        });
    }
});

export default handler;