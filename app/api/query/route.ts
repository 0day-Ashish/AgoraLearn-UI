import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { question } = body

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock AI response
    const mockAnswers = [
      "Based on the document, this topic is covered in section 3.2 with comprehensive examples.",
      "The document explains that this concept is fundamental to understanding the subject matter.",
      "According to the uploaded file, the key points are: First, this provides the foundation. Second, it enables scalability. Third, it ensures reliability.",
      "This is mentioned in chapter 5 where it discusses best practices and implementation strategies.",
      "The document provides a detailed explanation with practical examples showing how to apply these principles.",
    ]

    const randomAnswer = mockAnswers[Math.floor(Math.random() * mockAnswers.length)]

    return NextResponse.json({
      answer: randomAnswer,
      question: question,
    })
  } catch (error) {
    return NextResponse.json({ error: "Query processing failed" }, { status: 500 })
  }
}
