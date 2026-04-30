import nextConnect from "next-connect";
import db from "@/database/connection";
import Tutor from "@/database/model/Tutor";
import { buildLocationFromCoords } from "@/utility/helper";

const handler = nextConnect();


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