import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Clients = () => {
    return (
        <div className='py-20' id='projects'>
        {/* Heading */}
            <h1 className='heading'>
                Kind words from {' '}
                <span className='text-blue-500'>satisfied clients</span>
            </h1>

            {/* Show testimonials*/}
            <div className='flex flex-col items-center max-lg:mt-10'>
                    {/* Display cards */}
                    <InfiniteMovingCards 
                        items={testimonials}
                        direction='right'
                        speed='slow'
                    />

                {/* Companies */}
                <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10'>
                   {companies.map(({ id, img, name, nameImg }) => (
                        <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                            {/* Image */}
                            <img
                                src={img}
                                alt={name}
                                className='md:w-24 w-20'
                            />
                           {/* Image name */} 
                            <img
                                src={nameImg}
                                alt={name}
                                className='md:w-24 w-20'
                            />
                        </div>
                   ))} 
                </div>
            </div>
        </div>
    )
}

export default Clients