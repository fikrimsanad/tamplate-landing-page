"use client";

import Image from 'next/image';
import CustomButton from './CustomButton';

function Hero() {
    const handleScroll=()=>{

    }
  return (
    <div className='sm:flex sm:px-16 mb-28'>
        <div className='flex-1 mt-20 px-4 sm:pr-10'>
            <h1 className="sm:text-Loyal-Green sm:text-7xl sm:font-bold sm:text-left  text-Loyal-Green text-5xl font-bold">Learn To <span className='text-black'>Growth</span> Your Course !</h1>
            <p className='text-lg pr-6 pt-8 sm:text-left text-gray-500'>Learn to growth your online course, Dont worry they will know your course. Track your website to growth SEO and Learn how to use social media to make public know your course</p>
            <CustomButton
             
             title="Lihat Kelas"
             containerStyles="bg-Loyal-Green font-semibold rounded-full mt-16 px-16 py-3 text-white"
             handleClick={handleScroll}

            />
        </div>
        <div className='flex justify-center sm:pr-6 px-4 mt-10'>
        <div><Image src="/cover-illustration-02.svg" alt='Logo Cozytech' width={550} height={300} className="object-contain" /></div>
        </div>
    </div>
  )
}

export default Hero