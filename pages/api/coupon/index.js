import db from '@/database/connection'
import Product from '@/database/model/Product'
import Category from '@/database/model/Category'
import UserService from '@/services/user-service'
import { isAdmin, isAuth } from '@/utility'
import nextConnect from 'next-connect'
import slugify from 'slugify'
import Coupon from '@/database/model/Coupon'
const handler = nextConnect()
const PAGE_SIZE = 20

handler.use(isAuth, isAdmin)

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
handler.post(async (req, res) => {
  try {
    await db.connect()
    const { code, discount } = req.body

    // Check if the coupon code already exists
    const existingCoupon = await Coupon.findOne({ code })
    if (existingCoupon) {
      return res.status(200).json({ error: 'Coupon code already exists' })
    }
    const coupon = new Coupon({
      ...req.body,
      code,
      discount
    })

    await coupon.save()
    await db.disconnect()
    return res.status(201).json(coupon)
  } catch (error) {
    console.log({ error })
    res.status(500).json({ message: 'Server Error' })
  }
})

export default handler
