'use client'

import ButtonNav from "@/components/button/ButtonNav";
export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white  via-green-100 to-green-400 h-screen w-full box-border py-24">
      <h1 className="text-green-800 text-center mx-16 font-bold text-5xl">
        Uranium<span className="text-green-500">Ex</span>
      </h1>
      <h2 className="text-green-800 text-center mx-16 italic text-4xl">
        El mejor software empresarial para impulsar tu negocio
      </h2>
      <div className="my-5">
        <ButtonNav href="/login" className="bg-green-500 hover:bg-green-600 text-green-50 mx-auto flex w-max rounded text-xl">Inicie ahora</ButtonNav>
      </div>
    </div>
  );
}
