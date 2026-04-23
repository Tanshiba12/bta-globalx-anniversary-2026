import { readdir } from "fs/promises";
import { join } from "path";

export async function GET() {
    try {
        const imagesDir = join(process.cwd(), "public", "section2", "images");
        const files = await readdir(imagesDir);

        // Filter for image files and sort them
        const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
        const images = files
            .filter(file => imageExtensions.some(ext => file.toLowerCase().endsWith(ext)))
            .sort()
            .map(file => `/section2/images/${file}`);

        return Response.json({ images });
    } catch (error) {
        console.error("Error reading images directory:", error);
        return Response.json({ images: [], error: "Failed to load images" }, { status: 500 });
    }
}
