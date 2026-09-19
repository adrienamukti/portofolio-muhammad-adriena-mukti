import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-5xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 py-20'>
        <div>
            <Image 
              src={assets.profile_img} 
              alt='Muhammad Adriena Mukti' 
              className='rounded-full w-32' 
            />
        </div>

          <h3 className='text-xl md:text-2xl mb-3 font-Ovo text-center'>
              Hi, I'm Muhammad Adriena Mukti{' '}
              <Image
                  src={assets.hand_icon}
                  alt=''
                  className='inline-block w-6 ml-1 align-middle'
              />
          </h3>

        <h1 className='text-5xl sm:text-6xl lg:text-[40px] font-Ovo'>
            Aspiring Software Engineer & Quality Assurance.
        </h1>

        <p className='max-w-4xl mx-auto font-Ovo'>
            I'm an Informatics Engineering fresh graduate with hands-on experience
            in web development, backend development, debugging, and software testing.
            I'm passionate about building reliable software and ensuring applications
            work as expected through thoughtful development and testing.
        </p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a 
              href="#contact" 
              className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
            >
              contact me
              <Image src={assets.right_arrow_white} alt='' className='w-4' />
            </a>

            <a 
              href="/sample-resume.pdf" 
              download 
              className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'
            >
              my resume
              <Image src={assets.download_icon} alt='' className='w-4' />
            </a>
        </div>
    </div>
  )
}

export default Header