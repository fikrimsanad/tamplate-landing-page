import { About, Hero, ListClass, SectionWhy } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <SectionWhy />
      <ListClass />
      <About />
    </main>
  )
}
