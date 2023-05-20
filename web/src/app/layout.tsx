import {
  Bai_Jamjuree as BaiJanjuree,
  Roboto_Flex as Roboto,
} from 'next/font/google'

import { cookies } from 'next/headers'
import { ReactNode } from 'react'

import Copyright from './components/Copyright'
import Hero from './components/Hero'
import Profile from './components/Profile'
import SignIn from './components/SignIn'

import './globals.css'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJanjuree = BaiJanjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-janjuree',
})

export const metadata = {
  title: 'Memory Capsule',
  description: 'a memory capsule to save your good times',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJanjuree.variable} bg-purple-50 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2">
          {/* Left */}
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
            {/* Blur */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-r from-purple-400 to-orange-500 opacity-20 blur-full" />
            {/* Stripes */}
            <div className="absolute bottom-0 right-0.5 top-0 w-1 bg-black " />

            {isAuthenticated ? <Profile /> : <SignIn />}
            <Hero />
            <Copyright />
          </div>
          {/* Right */}
          <div className="flex max-h-screen flex-col overflow-y-scroll bg-gray-900 bg-[url(../assets/bg-stars.svg)] bg-cover ">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
