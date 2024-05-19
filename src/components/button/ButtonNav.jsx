'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ButtonNav({href, children, className}){
    const pathName = usePathname();
    return (<Link
        className={`py-2.5 md:px-5 px-4 text-black select-none duration-300 transition-colors hover:cursor-pointer hover:text ${
          pathName === href ? "active" : ""
        } ${className}`}
        href={href}
      >
        {children}
      </Link>)
}