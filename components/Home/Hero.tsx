import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='h-[40vh] md:h-[80vh] flex items-center justify-between'>
        {/* grid */}
        <div className="w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold uppercase'>
                Revolutionizing Healthcare, <span className='text-red-600'>One Click </span> <span className='text-orange-500'>at a Time</span> 
                </h1>
                <p className='text-sm md:text-base lg:text-lg text-black text-opacity-70 mt-4'>Discover a seamless and convenient way to manage your medications and health needs. With dPharma, you get easy access to a wide range of pharmaceuticals, expert consultations, and timely delivery services, all from the comfort of your home. Join us in transforming healthcare with innovative solutions designed for your well-being.</p>
                <div className='flex mt-6 items-center space-x-4'>
                    <Button size={"lg"} className='bg-blue-800'>Shop Now</Button>
                    <Button size={"lg"} className=''>Explore More</Button>
                </div>
            </div>
            <div className='hidden lg:block'>
                    <Image src={"/images/hero.svg"} alt='hero' width={600} height={600} className='lg:h-[50%] lg:w-[50%] xl:w-[80%] xl:h-[80%]'/>
            </div>
        </div>
    </div>
  )
}

export default Hero