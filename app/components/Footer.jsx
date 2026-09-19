import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <footer className='w-full px-[6%] sm:px-[8%] lg:px-[12%] pt-16 pb-6'>

      {/* Footer Main */}
      <div className='text-center max-w-2xl mx-auto'>

        <h2 className='text-2xl sm:text-3xl font-Ovo mb-3'>
          Muhammad Adriena Mukti
        </h2>

        <p className='text-sm sm:text-base text-gray-600 dark:text-white/70 font-Ovo leading-relaxed mb-7'>
          Informatics Engineering graduate interested in opportunities
          to build reliable software and contribute to software quality.
        </p>


        {/* Contact & Social */}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-7'>

          {/* Email */}
          <a
            href='mailto:muhammadadrmkti@gmail.com'
            className='flex items-center gap-2 text-sm sm:text-base text-gray-700 dark:text-white/80 hover:text-black dark:hover:text-white transition'
          >
            <Image
              src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
              alt='Email'
              className='w-5'
            />

            <span>Email</span>
          </a>


          {/* LinkedIn */}
          <a
            href='https://www.linkedin.com/in/muhammad-adriena-mukti/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-sm sm:text-base text-gray-700 dark:text-white/80 hover:text-black dark:hover:text-white transition'
          >
            <Image
              src={
                isDarkMode
                  ? assets.linkedin_dark
                  : assets.linkedin_icon
              }
              alt='LinkedIn'
              className='w-5'
            />

            <span>LinkedIn</span>
          </a>


          {/* GitHub */}
          <a
            href='https://github.com/adrienamukti'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-sm sm:text-base text-gray-700 dark:text-white/80 hover:text-black dark:hover:text-white transition'
          >
            <Image
              src={
                isDarkMode
                  ? assets.github_dark
                  : assets.github_icon
              }
              alt='GitHub'
              className='w-5'
            />

            <span>GitHub</span>
          </a>

        </div>
      </div>


      {/* Footer Bottom */}
      <div className='border-t border-gray-300 dark:border-gray-700 mt-12 pt-6'>

        <p className='text-center text-sm text-gray-500 dark:text-white/50'>
          © 2026 Muhammad Adriena Mukti. All rights reserved.
        </p>

      </div>

    </footer>
  )
}

export default Footer