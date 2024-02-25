"use client"

import { useDescription } from "../../../../_utils/Constant";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
 
const Page = () => {

  const desc = useDescription((state)=>state.description);

  return(
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="sign-in.img"
              src="/signup.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <a className="block text-white" href="#">
                <span className="sr-only">Home</span>
                <Image src='/logo.svg' width={100} height={100} className="hover:drop-shadow-2xl"/>
              </a>

              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to QuickLink
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                {desc}
              </p>
            </div>
          </section>

          <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <a
                  className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20 dark:bg-gray-900"
                  href="/"
                >
                  <span className="sr-only">Home</span>
                  <Image src='/logo.svg' width={55} height={40}/>
                </a>

                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
                  Welcome to QuickLink
                </h1>

                <p className="my-4 leading-relaxed text-gray-500 dark:text-gray-400">
                  {desc}
                </p>
              </div>

              <SignIn/>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}

export default Page