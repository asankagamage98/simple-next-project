"use client"

import { Inter } from 'next/font/google'
import './globals.css'

import { Providers } from "./redux/provider";
import ConditionalLayout from "./ConditionalLayout";

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
    <body className={inter.className}>
      <Providers>
        <ConditionalLayout>{children}</ConditionalLayout> 
      </Providers>
    </body>
      
    </html>
  )
}
