import Image from "next/image"

export default function SectionWhy() {
  return (
    <div className='mb-36'>
        <div className='flex-1 py-10 px-4 text-center'>
            <h1 className="text-Loyal-Blue text-4xl font-bold">Kenapa <span className='text-Loyal-Green'>Belajar</span> Disini ?</h1>
            <p className='text-base mx-auto w-2/4 mt-6 mb-6 text-gray-400'>Kalian bisa belajar secara keseluruhan mulai dari yang Basic hingga advance. Waktu belajar yang flexibel dan materi pembelajaran sesuai dengan case dilapangan</p>
        </div>
        <div className='mx-auto flex justify-center mt-10'>
            <div className=''>
                <div className="flex justify-center"><Image src="/icon-custom-2.png" alt='Logo Cozytech' width={90} height={90} className="object-contain" /></div>
                <div className="text-center mt-8">
                    <h3 className="text-Loyal-Blue text-xl font-bold">Waktu Belajar Flexible</h3>
                    <p className='text-base mx-auto w-3/4 pt-2 text-gray-400 font-light'>Belajar dimanapun kapanpun, membuat belajar lebih nyaman.</p>
                </div>
            </div>
            <div className=''>
                <div className="flex justify-center"><Image src="/icon-custom-1.png" alt='Logo Cozytech' width={90} height={90} className="object-contain" /></div>
                <div className="text-center mt-8">
                    <h3 className="text-Loyal-Blue text-xl font-bold">Belajar Kasus Nyata</h3>
                    <p className='text-base w-3/4 mx-auto pt-2 text-gray-400 font-light'>Belajar dari expert dan penggabungan dari contoh real dan teori.</p>
                </div>
            </div>
            <div className=''>
                <div className="flex justify-center"><Image src="/icon-custom-3.png" alt='Logo Cozytech' width={90} height={90} className="object-contain" /></div>
                <div className="text-center mt-8">
                    <h3 className="text-Loyal-Blue text-xl font-bold">Mendapatkan Mentoring</h3>
                    <p className='text-base w-3/4 mx-auto pt-2 text-gray-400 font-light'>Dapatkan mentoring setelah selesai sesi belajar anda</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}
