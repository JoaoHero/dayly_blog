import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dayly Blog",
  description: "Blog de João Ramos para compartilhar o meu dia a dia como estutante de programação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <header className="max-w-[800px] mx-auto">
          <Navbar />
        </header>

        {children}

      </body>
    </html>
  );
}
