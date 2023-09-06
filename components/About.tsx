import Image from "next/image"
import CustomButton from "./CustomButton"

export default function About() {
  return (
    <div className='flex sm:px-16 px-4 mb-28 mt-28 '>
        
           <div className="sm:flex justify-start">
               <div className="flex-1  pt-5">
                <h1 className="text-Loyal-Green sm:text-7xl text-5xl font-bold">Meet Our <br/><span className="text-black">Friendly </span>Tutor</h1>
                <p className="text-gray-500 mt-10 mb-8 pr-10 text-lg"><span className="font-bold text-black text-xl">Rachmad Algani</span> people also know <span className="text-Loyal-Green text-xl font-semibold">Gani</span> is profesional who expert in digital marketing, he already work more than 15 years in digital marketing and work more than 5 big company. Now he want to sharing his experiance and knowledge to other people with <span className="text-Loyal-Green text-xl font-semibold">online class</span>. In his online class you will learn about growth your product with <span className="text-Loyal-Green text-xl font-semibold">digital marketing</span> process. </p>
                <CustomButton title='Gabung Kelas !' btnType="button" containerStyles='rounded-full px-10 py-2 bg-Loyal-Green text-white font-bold min-w-[130px]' />

                <div className="mx-auto mt-8 py-10">
                  <h4 className="text-Loyal-Green font-bold text-xl mb-8">Follow Us</h4>
                <ul className="my-4 font-medium text-black text-lg">

                  <li className="flex gap-3 my-4 text-gray-500">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </span>
                    Instagram
                  </li>

                  <li className="flex gap-3 text-gray-500">
                    <span>
                      <svg className="w-6 h-6 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                          <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"/>
                          <path d="M3 5.012H0V15h3V5.012Z"/>
                      </svg>
                    </span>
                    Linkedin
                  </li>
                </ul>

             </div>
                </div>
               <div className="flex "><Image src="/ghani-cover-01.png" alt='Logo Cozytech' width={600} height={550} className="object-contain" /></div>
           </div> 
               
    </div>
  )
}
