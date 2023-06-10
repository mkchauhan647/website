import Layout from '@componets/Layout';
import './globals.css';
import { Inter } from 'next/font/google';
import Nabvar from '@componets/navbar/Nabvar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import ContextProvider from '@context/ContextProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "myhack's",
  description: "It's an website that describe my works",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ContextProvider>
          <Layout>
            {/* <Nabvar/> */}
            {children}
          </Layout>
        </ContextProvider>
      </body>
    </html>
  );
}
