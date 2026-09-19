import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div
      id='services'
      className='w-full px-[6%] sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20'
    >
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        What I do
      </h4>

      <h2 className='text-center text-5xl font-Ovo'>
        My Expertise
      </h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo leading-relaxed'>
        I focus on developing reliable web applications and ensuring software
        quality through development, testing, debugging, and API integration.
        Here are some of the areas I can contribute to.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className='border border-gray-400 rounded-lg px-8 py-10 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'
          >
            <Image
              src={icon}
              alt={`${title} icon`}
              className='w-10'
            />

            <h3 className='text-lg my-4 text-gray-700 dark:text-white font-semibold'>
              {title}
            </h3>

            <p className='text-sm text-gray-600 leading-6 dark:text-white/80'>
              {description}
            </p>

            <a
              href={link}
              className='flex items-center gap-2 text-sm mt-5'
            >
              View projects

              <Image
                alt=''
                src={assets.right_arrow}
                className='w-4'
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services