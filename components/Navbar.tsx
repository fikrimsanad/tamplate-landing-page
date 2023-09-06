import Link from 'next/link'
import Image from 'next/image'

import CustomButton from './CustomButton'

function Navbar() {
  return (
    <header className='w-full z-10 px-16 sm:block hidden'>
        <nav className='max-w-[1440 px] pt-7 pb-14 mb-6 mx-auto'>
            <Link href="/" className='flex justify-between items-center '>
              <Image src="/Logo-belajargan.png" alt='Logo Cozytech' width={180} height={70} className="object-contain" />
              <div className="flex justify-center mx-auto py-6">
                <ul className="flex justify-center gap-10 font-medium text-black text-lg">
                  <li>Beranda</li>
                  <li>Kelas</li>
                  <li>Tentang Kami</li>
                </ul>
             </div>

              <div className='flex gap-4'>
                        <button className='font-bold text-Loyal-Green '>Masuk</button>
                        <CustomButton title='Daftar' btnType="button" containerStyles='rounded-full px-10 py-2 bg-Loyal-Green text-white font-bold min-w-[130px]' />
              </div> 
                        

            </Link>

        </nav>
    </header>
  )
}

export default Navbar