"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  label: string;
  url: string;
};

const NavLink = ({ label, url }: NavLinkProps) => {
  const path = usePathname();
  const isActive = path === url;

  return (
    <Link
      className={`transition py-1.5 px-4 rounded-full font-medium text-xs leading-[1.33] text-[#9CA3AF] ${isActive ? "bg-[#1A2312] text-accent" : "hover:text-white"}`}
      href={url}
    >
      {label}
    </Link>
  );
};

export default NavLink;
