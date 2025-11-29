"use client"

import { Button } from "@/components/ui/button"
import DarkVeil from '@/components/ui/DarkVeil';
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase";
import Link from "next/link";

export default function LandingPage() {
  const [user, loading ] = useAuthState(auth); 
  const [signOut] = useSignOut(auth);
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      {/* Full-viewport veil background */}
      <div className="absolute inset-0 -z-10">
        <DarkVeil />
      </div>

      <div className="max-w-md w-full text-center relative z-10 text-white">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to AgoraLearn</h1>
          <p className="text-lg mb-8 text-white/80">
            Upload documents, ask questions, and get instant AI-powered answers
          </p>
        </div>

        {/* Auth Buttons */}
        <Link href="/sign-up">
        <div className="space-y-6 w-full">
         
          <Button variant="outline" size="lg" className="w-full bg-transparent">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12.48 10.45v3.68h6.84c-.29 1.45-1.01 2.48-2.58 3.2v3.06h4.54c2.16-1.48 3.74-3.78 3.74-6.55 0-.5-.05-.98-.15-1.39H12.48z"
              />
              <path
                fill="currentColor"
                d="M9 18.9c.34 0 .68-.03 1.01-.1v-3.17H5.07v-3.68h4.93v-2.59c0-2.08.45-3.92 1.3-5.36H9c-3.35 0-6.3 2.57-6.3 5.76 0 3.19 2.95 5.76 6.3 5.76v3.38z"
              />
              <path
                fill="currentColor"
                d="M9 5.02v3.17h4.93V5.02c-.33-.07-.67-.1-1.01-.1-1.87 0-3.51.93-4.52 2.33-.32.5-.58 1.05-.79 1.63-.21.58-.35 1.2-.4 1.85v3.68h6.84v-3.68H9z"
              />
            </svg>
            Sign in with Google
          </Button>
          

          <Button variant="outline" size="lg" className="w-full bg-transparent">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Sign in with GitHub
          </Button>
        </div>
        </Link>

        {/* Footer Note */}
        <p className="text-sm mt-8 text-white/70">Sign in to access your dashboard and upload files</p>
      </div>
    </div>
  )
}
