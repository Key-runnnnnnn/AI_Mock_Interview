import type { Metadata } from "next";
import { Mona_Sans} from "next/font/google";
import './globals.css';
import { Toaster } from "sonner";

const MonaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepWise",
  description: "AI-Powered platform for preparing for job interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${MonaSans.variable} antialiased pattern`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
