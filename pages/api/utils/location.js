import nextConnect from 'next-connect'
import axios from 'axios'
import fs from 'fs'
import path from 'path'

const handler = nextConnect()

handler.get(async (req, res) => {
    try {
        const allLocations = []

        // loop city_id 1 → 13
        for (let city_id = 1; city_id <= 13; city_id++) {
            const { data } = await axios.get(
                `https://admin.tutorsolutionbd.com/api/v1/locations`,
                {
                    params: {
                        city_id,
                        per_page: 300
                    }
                }
            )

            const locations = data?.data?.locations || []

            // extract only needed fields
            const formatted = locations.map(loc => ({
                id: loc.id,
                name: loc.name,
                city_id: loc.city_id,
                city: loc.city?.name
            }))

            allLocations.push(...formatted)
        }

        // file path → /public/locations.json
        const filePath = path.join(process.cwd(), 'public', 'locations.json')

        // write file
        fs.writeFileSync(
            filePath,
            JSON.stringify(allLocations, null, 2),
            'utf-8'
        )

        return res.status(200).json({
            success: true,
            total: allLocations.length,
            message: 'Locations fetched and saved successfully',
        })

    } catch (error) {
        console.error(error)

        return res.status(500).json({
            success: false,
            message: 'Failed to fetch locations'
        })
    }
})



export default handler