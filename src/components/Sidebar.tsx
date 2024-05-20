'use client'
import { useState } from "react";
import SideBarButton from "@/components/button/SideBarButton"
import {useGlobalContext} from "@/context/globalContext"

export default function SideBar() {
  let [state, setstate] = useState(0);
  const cambiar_estado = (state) => {
    setstate(state == 0 ? 1 : 0);
  };

  const {setActive} = useGlobalContext();

  let navigation = [
    [
      "/archive.svg",
      "Inventarios",
      () => {
        setActive('Inventarios')
      },
    ],
    [
      "/package.svg",
      "Productos",
      () => {
        setActive('Productos')
      },
    ],
    [
      "/book-open.svg",
      "Ver inventario",
      () => {
        setActive('Inventaros_contenido')
      },
    ]
  ];

  return (
    <>
      <div
        className={
          "bg-slate-100 duration-100 transition-all min-w-12" +
          (state == 1 ? "animation-expand w-64" : "w-12")
        }
      >
        <SideBarButton className={`px-0 w-full ${state == 1 ? "bg-rose-200" : ""}`} imageClassName="" handler={(e)=>{cambiar_estado(state)}} src={state == 1 ? "/x.svg" : "/menu.svg"}>{state == 1 ?  "Menu" : ""}</SideBarButton>
        {navigation.map((dato, i) => (
          <SideBarButton className="px-0 w-full" imageClassName="" handler={dato[2]} src={dato[0]}>{state == 1 ? dato[1] : ""}</SideBarButton>
        ))}
      </div>
    </>
  );
}
