
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['300'] });
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Altus",
  description: "Residential Tower in Los Cerros de Gurabo, Santiago, DR",
  // TODO: add favicon
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* NOTE: CHANGE THIS  */}
        <link rel="icon" href="https://i.redd.it/lhg9d9b80lz61.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
