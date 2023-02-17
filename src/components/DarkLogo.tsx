import Image from "next/image";

const DarkLogo = () => {
  const logoPath = "/midas-dark.svg";

  return <Image width={30} height={30} src={logoPath} alt="Next.js Logo" />;
};

export default DarkLogo;
