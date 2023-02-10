import Image from "next/image";

const Logo = () => {
  const logoPath = "/midas.svg";
  return (
    <Image
      color="white"
      width={50}
      height={50}
      src={logoPath}
      alt="Next.js Logo"
    />
  );
};

export default Logo;
