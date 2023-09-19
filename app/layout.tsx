import Navbar from "@/components/nav/navbar/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import SideBar from "@/components/nav/sidebar/sidebar";
import Providers from "@/store/Provider";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rural Log",
  description: "Market place for farmers by farmers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <Navbar />
          <main className="flex">
            <SideBar />
            <div className="flex-1 px-4"> {children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
