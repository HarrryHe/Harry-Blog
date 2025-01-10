import { Inter, Roboto_Mono } from 'next/font/google';
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";
import Providers from "./Provider";

const inter = Inter({ weight: ['400', '700'], subsets: ['latin'] });

const roboto = Roboto_Mono({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata = {
  title: "HarryHe's Blog",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrollbar">
      <head>
        <link rel="icon" href="/Images/kemiao.jpg" />
      </head>
      <body
        className={`flex flex-col min-h-screen bg-bg text-text tracking-tight transition-colors duration-500 md:px-12 sm:px-6 ${roboto.className}`}
      >
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

