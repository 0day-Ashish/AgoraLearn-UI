"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface FileItem {
  id: string
  name: string
  uploadedAt: string
  size: string
}

// Mock data
const mockFiles: FileItem[] = [
  {
    id: "1",
    name: "Machine Learning Basics.pdf",
    uploadedAt: "2 days ago",
    size: "2.4 MB",
  },
  {
    id: "2",
    name: "React Best Practices.docx",
    uploadedAt: "1 week ago",
    size: "1.8 MB",
  },
  {
    id: "3",
    name: "Database Design Guide.pdf",
    uploadedAt: "2 weeks ago",
    size: "3.1 MB",
  },
]

export default function Dashboard() {
  const [files] = useState<FileItem[]>(mockFiles)

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Upload documents and start asking questions</p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link href="/upload">
              <Button size="lg" className="w-full">
                Upload File
              </Button>
            </Link>
            <Link href="/chat">
              <Button variant="outline" size="lg" className="w-full bg-transparent">
                Start Chat
              </Button>
            </Link>
          </div>

          {/* Files List */}
          <Card>
            <CardHeader>
              <CardTitle>Your Files</CardTitle>
              <CardDescription>
                {files.length} document{files.length !== 1 ? "s" : ""} uploaded
              </CardDescription>
            </CardHeader>
            <CardContent>
              {files.length === 0 ? (
                <p className="text-center py-8 text-muted-foreground">
                  No files uploaded yet.{" "}
                  <Link href="/upload" className="text-primary hover:underline">
                    Upload your first file
                  </Link>
                </p>
              ) : (
                <div className="space-y-2">
                  {files.map((file) => (
                    <div
                      key={file.id}
                      className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{file.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {file.size} • Uploaded {file.uploadedAt}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
