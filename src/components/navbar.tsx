'use client'

import ImageButton from '../components/button/ImageButton'

export default function Navbar() {
  const menu = [
    ["Home", "/","/home.svg"],
    ["Products", "/products","/shopping-bag.svg"],
    ["Pricing", "/pricing","/dollar-sign.svg"],
    ["About", "/about","/info.svg"],
    ["Login", "/login","/log-in.svg"],
  ];
  return (
    <nav className="relative md:mx-10 mx-auto mt-8 flex justify-center">
      <ol>
        {menu.map((item) => (
          <ImageButton src={item[2]} imageClassName="inline-block" className="hover:text-green-50 hover:bg-green-500 inline-block" href={item[1]} text={item[0]}>{item[0]}</ImageButton>
        ))}
      </ol>
    </nav>
  );
}
