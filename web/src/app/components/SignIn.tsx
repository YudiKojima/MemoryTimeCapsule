import React from 'react'
import { User } from 'lucide-react'

function SignIn() {
  return (
    <a
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
      className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-200 to-orange-100">
        {/* <div className="block h-10 w-10 rounded-full bg-gray-500" /> */}
        <User className="absolute h-7 w-7 text-white" />
      </div>
      <p className="max-w-[140px] text-sm leading-snug text-gray-400">
        <span className="underline">Create your account</span> and save your
        memoirs!
      </p>
    </a>
  )
}

export default SignIn
