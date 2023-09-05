import { CustomButton } from "@/components"
import Image from "next/image"

export default function page() {
  return (
    <div className='px-16 mt-5 '>
        
      <div className="flex justify-start gap-2">
          <div className="flex-1 pr-5">
                 <div className="w-10/12 h-96 rounded-2xl bg-black"></div> 
                 <h1 className="mt-10 font-bold text-xl">About Class</h1>
                 <p className="text-gray-500 mt-5 mb-8 pr-10 text-lg">Rachmad Algani people also know Gani is profesional who expert in digital marketing, he already work more than 15 years in digital marketing and work more than 5 big company. Now he want to sharing his experiance and knowledge to other people with online class. In his online class you will learn about growth your product with digital marketing process. </p>
                 <h1 className="mt-10 font-bold text-xl">Mentor Profile</h1>
                 <div className="pt-5 flex justify-start">
                          <img className="w-8 h-8 mb-2 rounded-full" src="https://i.pravatar.cc/150?img=7" alt="Bonnie image"/>
                          <h5 className="text-base pl-5">Fikri Muhammad</h5>
                 </div>
                 <p className="text-gray-500 mt-5 mb-8 pr-10 text-lg">Rachmad Algani people also know Gani is profesional who expert in digital marketing, he already work more than 15 years in digital marketing and work more than 5 big company. Now he want to sharing his experiance and knowledge to other people with online class. In his online class you will learn about growth your product with digital marketing process. </p>
                 <h1 className="mt-10 font-bold text-xl">Video Class</h1>

                <div className="relative overflow-x-auto sm:rounded-t-lg mt-10">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-black uppercase bg-white">
                            <tr>
                                <th scope="col" className="py-3">
                                    Materi
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Waktu
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-50">
                                <th scope="row" className="py-4 font-medium text-black whitespace-nowrap">
                                    Introduction: Basic Figma
                                </th>
                                <td className="px-2 py-4">
                                    00.12.23
                                </td>
                                <td className="px-2 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                         <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                         <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                    </svg>
                                    </a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-50">
                                <th scope="row" className="py-4 font-medium text-black whitespace-nowrap">
                                    Introduction: Basic Figma
                                </th>
                                <td className="px-2 py-4">
                                    00.12.23
                                </td>
                                <td className="px-2 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                         <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                         <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                    </svg>
                                    </a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-50">
                                <th scope="row" className="py-4 font-medium text-black whitespace-nowrap">
                                    Introduction: Basic Figma
                                </th>
                                <td className="px-2 py-4">
                                    00.12.23
                                </td>
                                <td className="px-2 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                         <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                         <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                    </svg>
                                    </a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-50">
                                <th scope="row" className="py-4 font-medium text-black whitespace-nowrap">
                                    Introduction: Basic Figma
                                </th>
                                <td className="px-2 py-4">
                                    00.12.23
                                </td>
                                <td className="px-2 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                         <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                         <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                    </svg>
                                    </a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-50">
                                <th scope="row" className="py-4 font-medium text-black whitespace-nowrap">
                                    Introduction: Basic Figma
                                </th>
                                <td className="px-2 py-4">
                                    00.12.23
                                </td>
                                <td className="px-2 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                         <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                         <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                    </svg>
                                    </a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-50">
                                <th scope="row" className="py-4 font-medium text-black whitespace-nowrap">
                                    Introduction: Basic Figma
                                </th>
                                <td className="px-2 py-4">
                                    00.12.23
                                </td>
                                <td className="px-2 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                         <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                         <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                    </svg>
                                    </a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-50">
                                <th scope="row" className="py-4 font-medium text-black whitespace-nowrap">
                                    Introduction: Basic Figma
                                </th>
                                <td className="px-2 py-4">
                                    00.12.23
                                </td>
                                <td className="px-2 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                         <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                         <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                    </svg>
                                    </a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-50">
                                <th scope="row" className="py-4 font-medium text-black whitespace-nowrap">
                                    Introduction: Basic Figma
                                </th>
                                <td className="px-2 py-4">
                                    00.12.23
                                </td>
                                <td className="px-2 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                         <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                         <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                    </svg>
                                    </a>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>

                        
              </div>

              <div className="">
                 <img className="rounded-lg mb-7" src="/cover.jpg" alt="" width={450} height={250} />
                 <h1 className="text-balck text-3xl font-bold">Introduction Figma: Basic Figma</h1>      
                 <div className="pt-5 flex justify-start">
                          <img className="w-12 h-12 mb-2 rounded-full" src="https://i.pravatar.cc/150?img=7" alt="Bonnie image"/>
                          <h5 className="text-xl pl-5 pt-3">Fikri Muhammad</h5>
                 </div>
                 <div className="mt-4">
                        <p className="text-gray-400 text-xs font-light">Rating</p>
                        <div className="flex justify-start pt-1 gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                        </div>
                    </div>
                 <div className="mt-4 flex justify-start gap-7">
                 <div className="flex justify-start gap-2 mt-2">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                        <p className="text-black font-bold">100 Menit</p>
                    </div>

                    <div className="flex justify-start gap-2 mt-2">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                          </svg>
                        </span>
                        <p className="text-black font-bold">30 Video</p>
                    </div>

                    <div className="flex justify-start gap-2 mt-2">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </span>
                        <p className="text-black font-bold">12 User</p>
                    </div>

                 </div>
                 <h1 className="text-balck text-3xl font-bold text-Loyal-Green mt-5">Rp 350.000</h1>
                 <CustomButton title="Beli Kelas"containerStyles="bg-Loyal-Green font-semibold rounded-lg mt-16 px-16 py-3 text-white"/>
              </div>

           </div> 
               
    </div>
  )
}
