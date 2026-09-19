'use client'

import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function Work({ isDarkMode }) {
  const [showMore, setShowMore] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)

  const visibleProjects = showMore
    ? workData
    : workData.slice(0, 4)

  // Supaya halaman belakang tidak ikut scroll saat modal terbuka
  useEffect(() => {
    if (selectedProject || selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [selectedProject, selectedImage])

  return (
    <>
      <div
        id='work'
        className='w-full px-[6%] sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20'
      >
        <h4 className='text-center mb-2 text-lg font-Ovo'>
          My portfolio
        </h4>

        <h2 className='text-center text-5xl font-Ovo'>
          My Projects
        </h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo leading-relaxed'>
          A collection of projects I have worked on during my academic
          journey, internship, and personal learning, covering software
          development, testing, data processing, and API integration.
        </p>

        {/* PROJECT GRID */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-5'>
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden'
              style={{
                backgroundImage: `url(${project.bgImage})`
              }}
            >
              <div className='absolute inset-0 bg-black/5 group-hover:bg-black/20 transition duration-500' />

              <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                <div className='pr-2'>
                  <h2 className='font-semibold text-black'>
                    {project.title}
                  </h2>

                  <p className='text-sm text-gray-700'>
                    {project.description}
                  </p>
                </div>

                <div className='border rounded-full border-black w-9 shrink-0 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                  <Image
                    src={assets.send_icon}
                    alt='View project'
                    className='w-5'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SHOW MORE */}
        {workData.length > 4 && (
          <button
            onClick={() => setShowMore(!showMore)}
            className='w-max flex items-center justify-center gap-2 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-13 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'
          >
            {showMore ? 'Show less' : 'Show more'}

            <Image
              src={
                isDarkMode
                  ? assets.right_arrow_bold_dark
                  : assets.right_arrow_bold
              }
              alt=''
              className={`w-4 transition-transform duration-300 ${showMore ? 'rotate-90' : ''
                }`}
            />
          </button>
        )}
      </div>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div
          className='fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6'
          onClick={() => setSelectedProject(null)}
        >
          <div
            className='relative bg-white dark:bg-[#1a1a1a] dark:text-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 sm:p-10'
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              onClick={() => setSelectedProject(null)}
              className='absolute top-5 right-5 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-darkHover transition text-xl'
            >
              ×
            </button>

            {/* HEADER */}
            <div className='pr-12'>
              <p className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                {selectedProject.category}
              </p>

              <h2 className='text-3xl sm:text-4xl font-Ovo mb-4'>
                {selectedProject.title}
              </h2>

              <p className='text-gray-600 dark:text-white/80 leading-7'>
                {selectedProject.overview}
              </p>

              {/* LIVE DEMO */}
              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 mt-6 px-5 py-2.5 border border-gray-700 dark:border-white rounded-full text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300'
                >
                  Live Demo
                  <span>↗</span>
                </a>
              )}
            </div>

            {/* TECHNOLOGIES */}
            <div className='mt-8'>
              <h3 className='text-xl font-semibold mb-4'>
                Technologies
              </h3>

              <div className='flex flex-wrap gap-2'>
                {selectedProject.technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className='border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2 text-sm'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* SCREENSHOTS */}
            <div className='mt-10'>
              <h3 className='text-xl font-semibold mb-5'>
                Project Preview
              </h3>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {selectedProject.images?.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className='relative aspect-video rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 group'
                  >
                    <Image
                      src={image}
                      alt={`${selectedProject.title} preview ${index + 1}`}
                      fill
                      className='object-cover group-hover:scale-105 transition-transform duration-500'
                    />

                    <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition' />

                    <span className='absolute bottom-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition'>
                      View image
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* FEATURES */}
            <div className='mt-10'>
              <h3 className='text-xl font-semibold mb-4'>
                Key Features
              </h3>

              <ul className='space-y-2 text-gray-600 dark:text-white/80'>
                {selectedProject.features?.map((feature, index) => (
                  <li key={index} className='flex gap-3'>
                    <span>•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* TESTING */}
            {selectedProject.testing?.length > 0 && (
              <div className='mt-10'>
                <h3 className='text-xl font-semibold mb-4'>
                  Testing & Quality Assurance
                </h3>

                <ul className='space-y-2 text-gray-600 dark:text-white/80'>
                  {selectedProject.testing.map((test, index) => (
                    <li key={index} className='flex gap-3'>
                      <span>•</span>
                      <span>{test}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* IMAGE PREVIEW */}
      {selectedImage && (
        <div
          className='fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 sm:p-10'
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className='absolute top-5 right-5 text-white text-4xl z-10'
          >
            ×
          </button>

          <div
            className='relative w-full max-w-6xl h-[80vh]'
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt='Project preview'
              fill
              className='object-contain'
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Work