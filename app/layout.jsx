import Layout from '@componets/Layout'
import './globals.css'
import { Inter } from 'next/font/google'
import Nabvar from '@componets/navbar/Nabvar'
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "myhack's",
  description: "It's an website that describe my works",
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>

      <Layout>
    {/* <Nabvar/> */}
      {children}

      </Layout>
        
      </body>
    </html>
  )
}
