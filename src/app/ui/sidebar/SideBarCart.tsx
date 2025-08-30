import Link from 'next/link';
import React from 'react';

interface SideBarCartProps {
  item: {
    title: string;
    href: string;
    icon: React.ReactNode;
  };
}

function SideBarCart({ item }: SideBarCartProps) {
  return (
    <div className="py-3 flex items-center hover:bg-gray-300 transition rounded w-full text-center  pl-25 sm:pl-8 md:pl-6">
      {/* <Link href={item.href} className="flex items-center gap-3 w-full"> */}
      <Link href='#' className="flex gap-3 w-full">
        <div className="text-xl">{item.icon}</div>
        <span className="font-semibold">{item.title}</span>
      </Link>
    </div>
  );
}

export default SideBarCart;
