import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhatsapLink = () => {
  const whatsappUrl =
    "https://api.whatsapp.com/send?phone=+234 816 526 6966&text=Hi%20I%20will%20like%20to%20speak%20to%20an%20agent";
  https: return (
    <Link
      target="_blank"
      href={whatsappUrl}
      className="w-full text-center relative"
    >
      <Image
        src="/images/whatsapp.png"
        height={50}
        width={50}
        alt="Chat us on WhatsApp"
        className="mx-auto fixed right-10 bottom-4 transition duration-100 hover:scale-[1.2]"
      />
    </Link>
  );
};

export default WhatsapLink;
