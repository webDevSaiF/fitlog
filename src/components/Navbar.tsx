import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

const navLinks = [
  {
    id: 1,
    label: "Workouts",
    url: "/",
  },
  {
    id: 2,
    label: "My Plan",
    url: "/my-plan",
  },
];

const Navbar = () => {
  return (
    <header className="px-4 py-4 sm:py-6.5 border-b border-[#1C1F26]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-5 flex-wrap">
          <Link className="flex gap-2.5 items-center" href={"/"}>
            <Image src={logo} alt="FitLog Logo" />
            <p className="font-oswald font-black text-lg leading-[1.56] tracking-[0.9px]">
              FITLOG
            </p>
          </Link>
          <div className="order-last w-full flex justify-center sm:order-none sm:w-auto border-t border-[#1C1F26] sm:border-none pt-4 sm:pt-0">
            {navLinks.map((nav) => (
              <NavLink key={nav.id} label={nav.label} url={nav.url} />
            ))}
          </div>
          <div className="flex gap-6 items-center">
            <Link
              href={"/my-plan"}
              className="inline-flex gap-2 items-center text-xs text-[#D1D5DB] font-medium"
            >
              Plan
              <span className="min-w-5 h-5 px-1.5 bg-accent border border-accent rounded-[99999px] text-center text-black font-bold text-xs leading-[1.75] flex items-center justify-center">
                0
              </span>
            </Link>
            <Link
              href={"/my-plan"}
              className="inline-flex gap-2 items-center text-xs text-[#D1D5DB] font-medium"
            >
              Saved
              <span className="min-w-5 h-5 px-1.5 bg-transparent border border-[#2D313B] rounded-[99999px] text-center text-[#D1D5DB] font-bold text-xs leading-[1.75] flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
