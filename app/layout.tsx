import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/header/Navbar'
import Footer from '@/components/footer/Footer'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Israel',
  description: 'Static App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <NavBar />
        <main className="mt-[62px] ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
