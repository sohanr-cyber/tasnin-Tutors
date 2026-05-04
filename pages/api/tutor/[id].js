import nextConnect from "next-connect";
import db from "@/database/connection";
import Tutor from "@/database/model/Tutor";
import { buildLocationFromCoords } from "@/utility/helper";
import { isAuth, isAdmin } from "@/utility";
const handler = nextConnect();



const maskPhone = (phone) => {
    if (!phone) return null;
    return phone.slice(0, 5) + "****" + phone.slice(-2);
};

const maskWhatsApp = (whatsapp) => {
    if (!whatsapp) return null;
    return whatsapp.slice(0, 5) + "****" + whatsapp.slice(-2);
};

const maskFacebook = (fb) => {
    if (!fb) return null;

    // if full URL → show only base + stars
    try {
        const url = new URL(fb);
        return `${url.origin}/****`;
    } catch {
        return "facebook.com/****";
    }
};

handler.get(async (req, res) => {
    try {
        await db.connect();

        const { id } = req.query;

        const tutor = await Tutor.findById(id).lean();

        if (!tutor) {
            return res.status(404).json({
                success: false,
                message: "Tutor not found",
            });
        }

        // =========================
        // MASKED PUBLIC VIEW
        // =========================
        const safeTutor = {
            ...tutor,

            phone: maskPhone(tutor.phone),
            whatsapp: maskWhatsApp(tutor.whatsapp),
            facebook: maskFacebook(tutor.facebook),
        };

        return res.status(200).json({
            success: true,
            data: safeTutor,
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