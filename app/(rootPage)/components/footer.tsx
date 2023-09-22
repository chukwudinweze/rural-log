import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Phone, MailCheck, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-green-800 py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between px-4">
        {/* First Div logo*/}
        <div className="mb-4 md:mb-0  md:text-left">
          <Image
            src="/images/ruralog.png"
            alt="Logo"
            width={100}
            height={100}
          />
          <p className="mt-2 text-gray-400">
            Rural log, your last destination for all agro market
          </p>
        </div>

        {/* Second Div Contact*/}
        <div className="mb-4 md:mb-0 md:text-left">
          <h3 className="text-white hover:text-white text-lg font-semibold mb-2 cursor-pointer">
            Explore
          </h3>
          <ul className="text-gray-400 ">
            <li className="mt-1 hover:text-white">
              <Link href="/about">About</Link>
            </li>
            <li className="mt-1 hover:text-white">
              <Link href="/farmers">Our Farmers</Link>
            </li>
            <li className="mt-1 hover:text-white">
              <Link href="/projects">New Project</Link>
            </li>
            <li className="mt-1 hover:text-white">
              <Link href="/services">Services</Link>
            </li>
            <li className="mt-1 hover:text-white">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Third Div */}
        <div className="md:text-left">
          <h3 className="text-white hover:text-white text-lg font-semibold mb-2 cursor-pointer">
            Contact
          </h3>
          <ul className="text-gray-400 ">
            <li className="mt-1 flex items-center hover:text-white">
              <Phone size={16} className="mr-2" />
              +234 816 526 6966
            </li>
            <li className="mt-1 flex items-center hover:text-white">
              <MailCheck size={16} className="mr-2" />
              needhelp@rurallog.com
            </li>
            <li className="mt-1 flex items-center hover:text-white">
              <MapPin size={16} className="mr-2" />
              80 Idejo Victoria Island, Lagos
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
