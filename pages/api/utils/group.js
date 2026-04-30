import nextConnect from "next-connect";
import fs from "fs";
import path from "path";

const handler = nextConnect();

export const groupAndSaveLocations = async (data) => {
  try {
    const grouped = data.reduce((acc, item) => {
      const city = item.city;

      if (!acc[city]) {
        acc[city] = [];
      }

      acc[city].push(item);

      return acc;
    }, {});

    const filePath = path.join(process.cwd(), "groupLocation.json");

    await fs.promises.writeFile(
      filePath,
      JSON.stringify(grouped, null, 2),
      "utf-8"
    );

    console.log("groupLocation.json created successfully!");

    return grouped;
  } catch (error) {
    console.error("Error grouping locations:", error);
    throw error;
  }
};
handler.get(async (req, res) => {
  try {
    // ✅ correct path (public folder)
    const filePath = path.join(process.cwd(), "public", "location.json");

    const rawData = await fs.promises.readFile(filePath, "utf-8");
    const data = JSON.parse(rawData);

    const grouped = await groupAndSaveLocations(data);

    return res.status(200).json({
      success: true,
      message: "Locations grouped successfully from public/location.json",
      data: grouped,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to process location.json",
    });
  }
});
export default handler;