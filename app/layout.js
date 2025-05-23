import { Bodoni_Moda, Nunito_Sans } from "next/font/google";
import "./globals.css";

const bodoniMada = Bodoni_Moda({
  variable: "--font-bodoni-mada",
  weight: ['400', '600', '500', '700'],
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${bodoniMada.variable} ${nunitoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
