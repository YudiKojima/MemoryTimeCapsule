import React from 'react'
import Image from 'next/image'
import nlwLogo from '../../assets/nlw-spacetime-logo.svg'

function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="Nlw Logo" />
      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-900">
          Your time capsule
        </h1>
        <p className="text-lg leading-relaxed text-gray-700">
          Collect memorable moments from your journey and share (if you like)
          with the world!
        </p>
      </div>
      <div className="mt-5">
        <a
          className="incline-block rounded-full bg-gradient-to-r from-purple-500 to-orange-300 px-5 py-3 font-alt text-sm uppercase leading-none text-white opacity-90 transition-opacity hover:opacity-100"
          href=""
        >
          register memory
        </a>
      </div>
    </div>
  )
}

export default Hero
