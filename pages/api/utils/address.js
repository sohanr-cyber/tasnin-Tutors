import nextConnect from "next-connect";
import axios from "axios";

const handler = nextConnect();

const getCityAreaFromCoords = async (lat, lng) => {
    try {
        const { data } = await axios.get(
            "https://maps.googleapis.com/maps/api/geocode/json",
            {
                params: {
                    latlng: `${lat},${lng}`,
                    key: "AIzaSyC-RFV9uSyN3xiACUzFm2nfM9mnU2i69g0"
                }
            }
        );

        if (data.status !== "OK" || !data.results?.length) {
            console.log("Google API Error:", data.status);
            return null;
        }

        const components = data.results[0].address_components;

        let city = "";
        let area = "";

        components.forEach((c) => {
            // ✅ city (Dhaka, Chittagong etc.)
            if (c.types.includes("locality")) {
                city = c.long_name;
            }

            // ✅ fallback city for Bangladesh (VERY IMPORTANT)
            if (c.types.includes("administrative_area_level_2") && !city) {
                city = c.long_name;
            }

            // ✅ area (Mirpur, Uttara etc.)
            if (
                c.types.includes("sublocality_level_1") ||
                c.types.includes("sublocality") ||
                c.types.includes("neighborhood")
            ) {
                area = c.long_name;
            }
        });

        return {
            city,
            area,
            fullAddress: data.results[0].formatted_address
        };
    } catch (err) {
        console.log("Geo error:", err.message);
        return null;
    }
};

handler.get(async (req, res) => {
    try {
        const result = await getCityAreaFromCoords(
          23.6945408, 90.4331264
        );

        return res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Failed to get location"
        });
    }
});

export default handler;