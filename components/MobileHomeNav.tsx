"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { navLinks } from '@/constants';
import { Heart } from "lucide-react";
import Link from 'next/link';
import { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";

const MobileHomeNav = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger className="flex justify-center items-center ml-auto">
          <CiMenuFries className="text-[32px] text-teal-600" />
        </SheetTrigger>

        <SheetContent>
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <Link href="/" className="flex items-center justify-center mt-24">
            <Heart className="h-10 w-10 text-teal-600" />
            <h1 className="ml-2 text-4xl font-bold text-teal-700">NyumbaniCare</h1>
          </Link>

          <nav className="flex flex-col gap-4 text-xl sm:gap-6 items-center">
            {navLinks.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                onClick={() => setIsSheetOpen(false)}
                className={`${link.name === "Sign Up" ? "bg-teal-600 text-xl hover:bg-teal-700 text-white rounded-full py-2 px-3" : "font-medium hover:text-teal-600 transition-colors"}`}
              >
                <h2>{link.name}</h2>
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileHomeNav;
