import './globals.css'
import type { Metadata } from 'next'
import { Footer, Navbar } from '@/components'


export const metadata: Metadata = {
  title: 'Growth Your Online Course',
  description: 'Learn to growth your online course,and Learn how to use social media to make public know your course',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
