"use client";

import Image from 'next/image';
import CustomButton from './CustomButton';

function Hero() {
    const handleScroll=()=>{

    }
  return (
    <div className='flex px-16 mb-28'>
        <div className='flex-1 mt-20 pr-10'>
            <h1 className="text-Loyal-Green text-7xl font-bold">Learn To <span className='text-black'>Growth</span> Your Course !</h1>
            <p className='text-lg pr-6 pt-8 text-gray-500'>Learn to growth your online course, Dont worry they will know your course. Track your website to growth SEO and Learn how to use social media to make public know your course</p>
            <CustomButton
             
             title="Lihat Kelas"
             containerStyles="bg-Loyal-Green font-semibold rounded-full mt-16 px-16 py-3 text-white"
             handleClick={handleScroll}

            />
        </div>
        <div className='flex justify-center pr-6 mt-10'>
        <div><Image src="/cover-illustration-02.svg" alt='Logo Cozytech' width={550} height={300} className="object-contain" /></div>
        </div>
    </div>
  )
}

export default Hero