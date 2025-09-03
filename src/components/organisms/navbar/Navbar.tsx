"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import NavL from "@/components/atoms/navbar/NavL";
import NavButton from "@/components/atoms/navbar/NavButton";
import { NavLink } from "@/components/atoms/navbar/NavLink";

export interface Link {
  href: string;
  label: string;
  active?: boolean;
}

export default function Navbar() {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsTop(currentScrollY === 0);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        ${isTop ? "bg-transparent border-none shadow-none" : "bg-white"}
      `}
    >
      <div className="pad-x-xl flex justify-between py-4">
        <NavL />
        <nav className="hidden items-center font-semibold md:flex">
          <NavLink />
        </nav>
        <NavButton />
      </div>
    </div>
  );
}
