import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="w-28 h-10 relative">
      <Image
        className="hidden md:block absolute inset-0"
        layout="fill"
        objectFit="contain"
        alt="logo"
        src="/images/ruralog.png"
      />
      <Image
        className="md:hidden absolute inset-0"
        layout="fill"
        objectFit="contain"
        alt="logo"
        src="/images/ruralog.png"
      />
    </Link>
  );
};

export default Logo;
