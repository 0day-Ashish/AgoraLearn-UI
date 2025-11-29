import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock response
    return NextResponse.json({
      success: true,
      fileId: Math.random().toString(36).substr(2, 9),
      message: "File uploaded successfully",
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Upload failed" }, { status: 500 })
  }
}
