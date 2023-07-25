import Image from "next/image";

const DarkLogo = () => {
  const logoPath = "/logo-black.png";

  return <Image width={60} height={60} src={logoPath} alt="Next.js Logo" />;
};

export default DarkLogo;
