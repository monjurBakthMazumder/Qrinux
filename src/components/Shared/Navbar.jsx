"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Custom_Container from "../common/CustomContainer";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-primary py-5 px-4 text-white font-Jost relative z-50">
      <Custom_Container>
        <div className="flex justify-between items-center gap-5">
          {/* Logo Section - Always Visible */}
          <div className="flex z-50 items-center gap-3">
            <Image
              src="/assets/images/Common/logo.png"
              alt="Logo"
              width={50}
              height={50}
            />
            <h1 className="text-5xl font-teko">Qrinux</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden z-20 sm:flex items-center gap-5 justify-end text-lg font-jost">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/works">Works</Link>
            <Link href="/contact">
              <Button className="transition-transform duration-300 hover:scale-105">
                Contact
              </Button>
            </Link>
          </div>

          {/* Hamburger/Close Icon for Mobile */}
          <button
            className="sm:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu open/close
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </Custom_Container>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-16 left-0 right-0 bg-primary text-white flex flex-col items-center transition-all duration-500 ease-in-out z-50 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`} // Handle the overflow when closed
      >
        <div className="flex flex-col items-center gap-4 pt-6 pb-10 lg:text-3xl text-2xl font-jost">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link href="/works" onClick={() => setIsMenuOpen(false)}>
            Works
          </Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
            <Button className="transition-transform duration-300 hover:scale-105">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
