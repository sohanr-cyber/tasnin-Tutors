import nextConnect from 'next-connect'
import db from '@/database/connection'
import Requirement from '@/database/model/Requirement'
// import { sendToTelegram } from '@/lib/notifyTelegram'
import Message from '@/services/message-service'
const handler = nextConnect()
const message = new Message()
// ========================
// GET ALL REQUESTS (ADMIN)
// ========================

handler.get(async (req, res) => {
    try {
        await db.connect()

        const requests = await Requirement.find().sort({ createdAt: -1 })

        res.status(200).json({
            success: true,
            data: requests
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})


// ========================
// CREATE NEW REQUEST
// ========================
handler.post(async (req, res) => {
    try {
        await db.connect()

        const data = req.body

        if (!data.phone) {
            return res.status(400).json({ message: 'Phone is required' })
        }

        const newRequest = await Requirement.create(data)

        // 🔥 Instant admin notification (Telegram)
        // await sendToTelegram(newRequest)
        await message.sendMessage({ number: newRequest.phone, message: "Tasnim Tutors - We Have recieved Tutor Request From You " })
        await message.sendMessage({ number: "01744329811", message: `Tasnim Tutors - New Tutor Request From ${newRequest.phone}` })


        res.status(201).json({
            success: true,
            message: 'Tutor request created successfully',
            data: newRequest
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})


// ========================
// UPDATE STATUS (ADMIN)
// ========================
handler.put(async (req, res) => {
    try {
        await db.connect()

        const { id, status } = req.body

        const ALLOWED_STATUS = [
            "pending",
            "processing",
            "matched",
            "completed"
        ]

        if (!ALLOWED_STATUS.includes(status)) {
            return res.status(400).json({ message: 'Invalid status' })
        }

        const request = await Requirement.findById(id)

        if (!request) {
            return res.status(404).json({ message: 'Request not found' })
        }

        const previousStatus = request.status
        request.status = status

        await request.save()

        res.status(200).json({
            message: `Status updated from ${previousStatus} to ${status}`,
            data: request
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})


// ========================
// UPDATE PARTIAL DATA (PATCH)
// ========================
handler.patch(async (req, res) => {
    try {
        await db.connect()

        const { id } = req.query
        const updateData = req.body

        const request = await Requirement.findById(id)

        if (!request) {
            return res.status(404).json({ message: 'Request not found' })
        }

        // update only provided fields
        Object.keys(updateData).forEach((key) => {
            request[key] = updateData[key]
        })

        await request.save()

        res.status(200).json({
            message: 'Request updated successfully',
            data: request
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

export default handler