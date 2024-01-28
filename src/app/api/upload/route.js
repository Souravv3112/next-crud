import { NextResponse } from "next/server";
import { writeFile } from "fs/promises"

export async function POST(request) {
    const data = await request.formData();
    const file = data.get('file');
    if (!file) {
        return NextResponse.json({ "message": "No Image Found", success: false })
    } else {
        const bytData = await file.arrayBuffer();
        const buffer = Buffer.from(bytData);
        const path = `./public/${file.name}`
        await writeFile(path, buffer);
        return NextResponse.json({ "message": "Image Uploaded.", success: true })
    }
}