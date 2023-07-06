import { Toaster } from 'react-hot-toast'
import RegisterModal from './components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import './globals.css'
import { Inter } from 'next/font/google'
import RentModal from './components/modals/RentModal'
import SearchModal from './components/modals/SearchModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Desir',
  description: 'Desir'
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <RentModal />
        <LoginModal />
        <SearchModal />
        <RegisterModal />
        <div className="">
          {children}
        </div>
      </body>
    </html>
  )
}
