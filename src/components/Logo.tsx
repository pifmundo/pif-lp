import Image from "next/image";

const Logo = () => {
  const logoPath = "/midas.svg";
  const darkLogoPath = "/midas-dark.svg";

  return <Image width={50} height={50} src={logoPath} alt="Next.js Logo" />;
};

export default Logo;
