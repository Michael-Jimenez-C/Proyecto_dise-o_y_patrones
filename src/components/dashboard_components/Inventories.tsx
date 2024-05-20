'use client'
import { useGlobalContext } from "@/context/globalContext";
import Button from "../button/Button";
import invFetch from "@/lib/dashboard/invFetch"
import { useState } from "react";
import List from '@/components/dataShow/List'
export default function Inventories(){
    const {invs, getInvs} = useGlobalContext();
    let [dataShow, setDataShow]= useState(<div></div>);

    const handle = async (e) => {
        e.preventDefault();
        const data = await invFetch(1);
        setDataShow(<List data={data} 
          handlerDelete={(id)=>{
            console.log(id)
          }} 
          handlerEdit={(id)=>{
            console.log(id)
          }}/>
        );
      };
    
    return(<><Button className="bg-green-500 my-4 rounded hover:bg-green-600 text-white" handler={handle}>Cargar</Button>{dataShow}</>)
}