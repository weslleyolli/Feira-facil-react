import { ReactNode } from 'react'
import { Fredoka, Roboto_Flex as Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto'})
const fredoka =Fredoka({ subsets: ['latin'], variable: '--font-fredoka'})

export const metadata = {
  title: 'Feira Facil',
  description: 'Uma forma descomplicada de ir a feira sem sair de casa!',
}

export default function RootLayout({children,}: {children: ReactNode}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
