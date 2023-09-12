import Image from "next/image";

const Logo = () => {
  return (
    <div className="w-28 h-10 relative">
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
    </div>
  );
};

export default Logo;
