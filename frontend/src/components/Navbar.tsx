"use client";
import { FaUserGraduate, FaCalendarAlt, FaClipboardList } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4 md:flex-row flex-col">
        <div className="text-2xl font-bold">
          <Link href="/">
            <div className="flex items-center text-green-400 cursor-pointer">
              <AiOutlineHome className="mr-2" />
              AcademiaPlus
            </div>
          </Link>
        </div>
        <div className="md:hidden mt-2">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex md:space-x-6 md:items-center md:mt-0 mt-4 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <li>
            <Link href="/attendance">
              <div className="flex items-center hover:text-blue-300 cursor-pointer">
                <FaClipboardList className="mr-2" />
                Attendance
              </div>
            </Link>
          </li>
          <li>
            <Link href="/routine">
              <div className="flex items-center hover:text-blue-300 cursor-pointer">
                <FaCalendarAlt className="mr-2" />
                Routine
              </div>
            </Link>
          </li>
          <li>
            <Link href="/marks">
              <div className="flex items-center hover:text-blue-300 cursor-pointer">
                <FaUserGraduate className="mr-2" />
                Marks
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
