import Link from 'next/link';
import React from 'react';
import CartShow from './Component/CartShow';
import { RootState } from '../shop'; // ✅ fix this path
import { useSelector } from 'react-redux';
import { usePathname } from "next/navigation";
interface SideBarCartProps {
  item: {
    title: string;
    href: string;
    icon: React.ReactNode;
  };
}

function SideBarCart({ item }: SideBarCartProps) {
  // ✅ get cart array from redux
  const cart = useSelector((state: RootState) => state.cart.cart);
   const pathname = usePathname();
  const isActive = item.href ? pathname === item.href : false;


  return (
    <div className={`py-3 flex items-center hover:bg-gray-300 transition rounded w-full text-center pl-6 sm:pl-8 md:pl-6 ${isActive ? 'bg-gray-300' : ''}`}>
      <Link href={item.href} className="flex items-center gap-3 w-full">
        <div className="text-xl">{item.icon}</div>
        <span className="font-semibold flex items-center gap-2">
          {item.title}
          {item.title === 'Cart' && cart.length > 0 && (
            <CartShow cart={cart} />
          )}
        </span>
      </Link>
    </div>
  );
}

export default SideBarCart;
