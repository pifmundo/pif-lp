import Image from "next/image";

const Logo = () => {
  const logoPath = "/logo-yellow.png";

  return <Image width={80} height={80} src={logoPath} alt="Next.js Logo" />;
};

export default Logo;
