'use client'
import { useGlobalContext } from "@/context/globalContext";
import Button from "../button/Button";
import invFetch from "@/lib/dashboard/invFetch"
import { useState } from "react";
import List from '@/components/dataShow/List'
import CircleButton from "../button/CircleButton";
import InvForm from "@/components/forms/InvForm"
export default function Inventories(){
    const {currentinv, setCurrInv, setActive} = useGlobalContext();
    let [dataShow, setDataShow]= useState(<div></div>);
    let [formStatus, setFormStatus]= useState(true);
    let [editing, setEditing]= useState(true);
    let [name, setName] = useState("");
    let [location, setLocation] = useState("");

    const handle = async (e:any) => {
        e.preventDefault();
        const data = await invFetch(1);
        setDataShow(<List kind='inv' data={data} 
          handler={(id:number)=>{
            setCurrInv(id)
            setActive('Inventaros_contenido')
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
      <CircleButton className={"p-4 duration-300 transition-all "+ (formStatus? "bg-green-500":"bg-rose-500 rotate-45")} imageClassName="" onClick={()=>{setFormStatus(!formStatus)}} src="/plus.svg"></CircleButton>
      <div className={`mx-auto bg-white p-8 rounded-lg shadow-md w-80 shadow-sm shadow-black ${formStatus? "hidden":""}`}>
        <form>
            <InvForm/>
            <Button handler={editing? edit:create} className="w-full bg-green-500 hover:bg-green-600 my-4 rounded">ACEPTAR</Button>
        </form>
      </div>
    </div>
    </>)
}