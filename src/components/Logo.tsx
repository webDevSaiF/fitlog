import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link className="flex gap-2.5 items-center" href={"/"}>
      <Image src={logo} alt="FitLog Logo" />
      <p className="font-oswald font-black text-lg leading-[1.56] tracking-[0.9px]">FITLOG</p>
    </Link>
  );
};

export default Logo;
