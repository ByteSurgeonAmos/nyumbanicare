import { navLinks } from '@/constants';
import Link from 'next/link';
import React from 'react';

const HomeNav = () => {
  return (
    <nav className="hidden lg:flex gap-4 text-xl sm:gap-6 items-center">
      {navLinks.map((link, index) => (
      <Link
        href={link.href}
        key={index}
        className={`${link.name === "Sign Up" ? "bg-teal-600 text-xl hover:bg-teal-700 text-white rounded-full py-2 px-3" : "font-medium hover:text-teal-600 transition-colors"}`}
      >
        <h2>{link.name}</h2>
      </Link>
      ))}
    </nav>
  );
}

export default HomeNav;
