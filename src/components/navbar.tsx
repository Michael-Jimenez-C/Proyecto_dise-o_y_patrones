'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  const menu = [
    ["Home", "/"],
    ["Products", "/products"],
    ["Pricing", "/pricing"],
    ["About", "/about"],
    ["Sign in", "/login"],
  ];
  return (
    <nav className="relative md:mx-10 mx-auto mt-8 flex justify-center">
      <ol>
        {menu.map((item) => (
          <Link
            key={"menu-" + item[0]}
            className={`py-2.5 md:px-5 px-4 text-black hover:bg-green-500 select-none hover:cursor-pointer hover:text-green-50 hover:text ${
              pathName === item[1] ? "active" : ""
            }`}
            href={item[1]}
          >
            {item[0]}
          </Link>
        ))}
      </ol>
    </nav>
  );
}
