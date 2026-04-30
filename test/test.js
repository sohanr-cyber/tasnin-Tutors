import fs from "fs";
import path from "path";

export const groupAndSaveLocations = (data) => {
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

    fs.writeFileSync(filePath, JSON.stringify(grouped, null, 2), "utf-8");

    console.log("groupLocation.json created successfully!");
    return grouped;
  } catch (error) {
    console.error("Error grouping locations:", error);
    throw error;
  }
};