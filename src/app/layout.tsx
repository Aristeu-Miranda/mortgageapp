import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from 'next/font/google'

const plus = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '700']
})

export const metadata: Metadata = {
  title: "Mortgage - Hipoteca",
  description: "Calculadora de hipoteca",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${plus.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
