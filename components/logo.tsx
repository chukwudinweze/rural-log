import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        className="hidden md:block"
        width="150"
        height="100"
        alt="logo"
        src="/images/ruralog.png"
      />
      <Image
        className="md:hidden"
        width="100"
        height="100"
        alt="logo"
        src="/images/ruralog.png"
      />
    </div>
  );
};

export default Logo;
