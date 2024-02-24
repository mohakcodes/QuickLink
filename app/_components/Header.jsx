import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
        <header className="bg-white dark:bg-gray-900 border-b-2 border-violet-500">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <a href="/"><Image src='/logo.svg' width={50} height={30}/></a>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <a
                                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                href="/"
                                >
                                Home
                                </a>
                            </li>
                            <li>
                                <a
                                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                href="/upload"
                                >
                                Upload
                                </a>
                            </li>
                            <li>
                                <a
                                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                href="https://github.com/mohakcodes"
                                >
                                Connect
                                </a>
                            </li>
                            
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                        <a
                            className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
                            href="/upload"
                        >
                            Get Started
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header