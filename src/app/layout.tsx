import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/common/Header";
const geistSans = localFont({
  src: "./fonts/Kupertino-Primary-Font.ttf",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FetchLab",
  description: "",
  icons: ["/logos/favicon.svg"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <div className="z-10 w-full flex flex-col items-center justify-center">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
