import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = ({ isDarkMode }) => {
    return (
        <div
            id='about'
            className='w-full px-[6%] sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20'
        >
            <h4 className='text-center mb-2 text-lg font-Ovo'>
                introduction
            </h4>

            <h2 className='text-center text-5xl font-Ovo'>
                About me
            </h2>

            <div className='flex w-full flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20 mt-8 mb-20'>

                {/* Profile Image */}
                <div className='w-64 sm:w-80 rounded-3xl max-w-none shrink-0'>
                    <Image
                        src={assets.user_image}
                        alt='Muhammad Adriena Mukti'
                        className='w-full rounded-3xl'
                    />
                </div>

                {/* About Content */}
                <div className='flex-1 w-full'>

                    <p className='mb-10 max-w-2xl font-Ovo text-sm sm:text-base leading-relaxed text-justify'>
                        Hi, I'm Muhammad Adriena Mukti, an Informatics Engineering graduate
                        with a strong interest in software development and quality assurance.
                        I have experience developing web applications using Laravel, React.js,
                        Next.js, Node.js, and MySQL, as well as debugging and black-box testing.
                        I enjoy solving technical problems, learning new technologies, and
                        building reliable applications that meet user and system requirements.
                    </p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <li
                                key={index}
                                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                            >
                                <Image
                                    src={isDarkMode ? iconDark : icon}
                                    alt={title}
                                    className='w-7 mt-3'
                                />

                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>
                                    {title}
                                </h3>

                                <p className='text-gray-600 text-sm dark:text-white/80'>
                                    {description}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <h4 className='my-6 text-gray-700 font-Ovo dark:text-white/80'>
                        Tools I use
                    </h4>

                    <ul className='flex items-center gap-3 sm:gap-5 flex-wrap'>
                        {toolsData.map((tool, index) => (
                            <li
                                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                                key={index}
                            >
                                <Image
                                    src={tool}
                                    alt='Tool'
                                    className='w-5 sm:w-7'
                                />
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default About