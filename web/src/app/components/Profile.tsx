import React from 'react'
import { getUser } from '@/lib/auth'
import Image from 'next/image'
import Link from 'next/link'

function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt=""
        className="block h-12 w-12 rounded-full"
      />

      <p className="max-w-[140px] text-sm leading-snug text-gray-400">
        {name}
        <Link
          href="/api/auth/logout"
          className="block text-red-400 hover:text-red-300"
        >
          Logout
        </Link>
      </p>
    </div>
  )
}

export default Profile
