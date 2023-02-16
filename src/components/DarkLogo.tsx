import Image from "next/image";

const DarkLogo = () => {
  const logoPath = "/midas-dark.svg";

  return <Image width={50} height={50} src={logoPath} alt="Next.js Logo" />;
};

export default DarkLogo;
