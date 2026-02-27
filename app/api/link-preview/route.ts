import { NextResponse } from "next/server";
import { getLinkPreview } from "link-preview-js";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const url = searchParams.get("url");

        if (!url) {
            return NextResponse.json({ error: "URL is required" }, { status: 400 });
        }

        const data = await getLinkPreview(url, {
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            },
            followRedirects: "follow"
        });

        return NextResponse.json(data);
    } catch (error) {
        console.error("Link preview error:", error);
        return NextResponse.json({ error: "Failed to fetch link preview" }, { status: 500 });
    }
}
