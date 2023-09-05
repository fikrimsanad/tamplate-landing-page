import Image from "next/image"
import Card from "./Card"

function ListClass() {
  return (
    <div className=''>
        <div className="gap-6 px-16 mt-44 py-1">

            <div className="">
                <p className="text-Loyal-Green text-sm font-semibold">List Kelas</p>
                <h1 className="text-4xl text-Loyal-Blue font-bold font mt-2 mb-3">Kelas Dari Kami</h1>
                <p className="text-gray-400 text-base font-light">Kami berikan materi terbaik untuk kebetuhan anda. Ilmu merupakan investasi terbaik.Jangan ragu untuk join kelas kami</p>

            </div>

            <div className="flex justify-center gap-14 my-20">

           <Card />
           <Card />
           <Card />


            </div>

        </div>



    </div>
  )
}

export default ListClass