import { Heart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import HomeNav from './HomeNav';
import MobileHomeNav from './MobileHomeNav';

const HomeHeader = () => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between sticky top-0 z-50 bg-white">
      <Link href="/" className="flex items-center justify-center">
        <Heart className="h-6 w-6 md:h-10 md:w-10 text-teal-600" />
        <h1 className="ml-2 text-2xl md:text-4xl font-bold text-teal-700">NyumbaniCare</h1>
      </Link>
      <HomeNav />
      <MobileHomeNav />
    </header>
  );
}

export default HomeHeader;
