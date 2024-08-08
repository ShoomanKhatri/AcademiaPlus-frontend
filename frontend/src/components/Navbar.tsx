"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaXmark, FaBars } from "react-icons/fa6";
import Image from "next/image";

const navItems = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Features",
    link: "/features",
    children: [
      { label: "Attendance", link: "/features/Attendance" },
      { label: "Routine", link: "/features/Routine" },
      { label: "Marks", link: "/features/Marks" },
    ],
  },
  
  {
    label: "About Us",
    link: "/about",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null); // Close any open dropdown when menu toggles
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <nav className="borderb bg-gray-900 bg-opacity-90  fixed z-[100] left-0 right-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 ">
        <div className="flex-shrink-0 ">
          <Link href="/">
            <div className="flex items-center gap-1">
              <div className="relative">
                <span className="text-xl font-bold uppercase tracking-tight text-gray-100">
                  AcademiaPlus
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Nav items for larger screens */}
        <div className="hidden md:flex items-center gap-4 transition-all">
          {navItems.map((d, i) => (
            <div key={i} className="relative group px-2 py-3 transition-all">
              <Link
                href={d.link ?? "#"}
                className="flex cursor-pointer items-center gap-2 text-gray-300 group-hover:text-white"
              >
                <span>{d.label}</span>
                {d.children && (
                  <MdOutlineKeyboardArrowDown className="transition-all group-hover:rotate-180" />
                )}
              </Link>
              {d.children && (
                <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-gray-900 py-3 shadow-md transition-all group-hover:flex">
                  {d.children.map((ch, ci) => (
                    <Link
                      key={ci}
                      href={ch.link ?? "#"}
                      className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-gray-300 hover:text-gray-500"
                    >
                      <span className="whitespace-nowrap">{ch.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-400 focus:outline-none focus:text-gray-100"
          >
            {isMenuOpen ? (
              <FaXmark className="h-6 w-6  text-white" />
            ) : (
              <FaBars className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4 ">
          <Link href="/login">
            <button className="h-10 rounded-full border bg-blue-600 border-blue-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-500 hover:text-white active:bg-pink-200 shadow-xl shadow-gray-500
              hover:shadow-3xl hover:shadow-blue-300">
              Log in
            </button>
          </Link>
          <Link href="/signup">
            <button className="h-10 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white transition-all border border-transparent hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 hover:bg-gradient-to-r   shadow-xl shadow-gray-500
              hover:shadow-3xl hover:shadow-pink-300">
              Sign up 
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Nav items */}
      {isMenuOpen && (
        <div className="md:hidden inset-0  flex flex-col items-start space-y-4 p-4  ">
          {navItems.map((d, i) => (
            <div key={i} className="w-full ">
              <div
                className="flex justify-between items-center cursor-pointer py-3 "
                onClick={() => toggleDropdown(i)}
              >
                <Link 
                 key={i}
                  href={d.link ?? '#'}
                  onClick={closeMenu}
                  >
                <span className="flex items-center gap-2 text-white  group-hover:text-black">
                  {d.label}
                </span>
                </Link>
              </div>
              {d.children && openDropdown === i && (
                <div className="flex flex-col pl-4">
                  {d.children.map((ch, ci) => (
                    <Link
                      key={ci}
                      href={ch.link ?? "#"}
                      className="py-2 text-white hover:text-black"
                      onClick={closeMenu}
                    >
                      {ch.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex flex-col items-center gap-4 w-full mt-6 ">
            <Link href="/login" onClick={closeMenu}>
              <button className="w-60 h-10 rounded-md border border-blue-500 px-4 py-2 text-sm font-medium text-pink-500 transition-all hover:bg-pink-500 hover:text-white active:bg-pink-200">
                Sign in
              </button>
            </Link>
            <Link href="/signup" onClick={closeMenu}>
              <button className="w-60 h-10 rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white transition-all border border-transparent hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 hover:bg-gradient-to-r">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
