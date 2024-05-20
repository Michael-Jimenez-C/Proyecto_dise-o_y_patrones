'use client'
import { useGlobalContext } from "@/context/globalContext";
import Button from "../button/Button";
import prodFetch from "@/lib/dashboard/prodFetch"
import { useState } from "react";
import List from '@/components/dataShow/List'
import Table from "../dataShow/Table";
import CircleButton from "../button/CircleButton";

export default function Products(){
    const {currentinv, setCurrInv, setActive} = useGlobalContext();
    let [dataShow, setDataShow]= useState(<div></div>);
    let [formStatus, setFormStatus]= useState(true);
    let [editing, setEditing]= useState(true);
    let [name, setName] = useState("");
    let [location, setLocation] = useState("");

    const handle = async (e:any) => {
        e.preventDefault();
        const data = await prodFetch(1);
        console.log(data)
        setDataShow(<Table kind='products' data={data} 
          handler={(id:number)=>{
          }}
          handlerDelete={(id:number)=>{
            console.log(id)
          }} 
          handlerEdit={(id:number)=>{
            
          }}/>
        );
      };


    const edit = ()=>{

    }
    const create = ()=>{

    }
    
    return(<>
    <Button className="bg-green-500 my-4 rounded hover:bg-green-600 text-white" handler={handle}>Cargar</Button>
    {dataShow}
    <div className="w-4/5">
      <CircleButton className={"p-4 "+ (formStatus? "bg-green-500":"bg-rose-500 rotate-45")} imageClassName="" onClick={()=>{setFormStatus(!formStatus)}} src="/plus.svg"></CircleButton>
      <div className={`mx-auto bg-white p-8 rounded-lg shadow-md w-80 shadow-sm shadow-black ${formStatus? "hidden":""}`}>
        <form>
            <label className="text-green-700">
              Nombre<br/>
              <input value={name} className="text-green-700 border border-green-700" onChange={(e)=>{setName(e.target.value)}}></input>
            </label>
            <label className="text-green-700">
              Ubicación<br/>
              <input value={location} className="text-green-700 border border-green-700" onChange={(e)=>{setLocation(e.target.value)}}></input>
            </label>
            <Button handler={editing? edit:create} className="w-full bg-green-500 hover:bg-green-600 my-4 rounded">ACEPTAR</Button>
        </form>
      </div>
    </div>
    </>)
}