"use client"

import React from 'react'
import { useDescription } from '../_utils/Constant'

const Hero = () => {

  const desc = useDescription((state)=>state.description);

  return (
    <div>
        <section className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:py-44 py-28 lg:flex">
            {/* lg:h-screen lg:items-center - discarded */}
                <div className="mx-auto max-w-4xl text-center">
                    <h1
                        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                    >
                        Upload, share and access your files

                        <span className="sm:block py-2">Effortlessly in one spot </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                        {desc}
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                        className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-800 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                        href="/files"
                        >
                        Get Started
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero