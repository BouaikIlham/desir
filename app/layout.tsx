import { Toaster } from 'react-hot-toast'
import RegisterModal from './components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import './globals.css'
import { Inter } from 'next/font/google'

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
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <LoginModal />
        <RegisterModal />
        <div className="pb-20">
          {children}
        </div>
      </body>
    </html>
  )
}
