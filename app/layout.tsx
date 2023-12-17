import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Providers from "@/store/Provider";
import ToasterContext from "./context/ToasterContext";
import WhatsapLink from "./(main-route)/(rootPage)/components/whatsapLink";
import Footer from "../components/footer";

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
          <ToasterContext />
          <WhatsapLink />
          <main className="flex">
            <div className="flex-1"> {children}</div>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
