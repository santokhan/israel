import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/header/Navbar'
import Footer from '@/components/footer/Footer'
import Head from 'next/head'

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
      <Head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
      </Head>
      <body className={[rubik.className, "bg-app-cream"].join(" ")}>
        <NavBar />
        <main className="mt-[62px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
