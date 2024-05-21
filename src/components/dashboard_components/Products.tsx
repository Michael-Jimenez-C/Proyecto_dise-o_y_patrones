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
    let [pcompra, setpcompra] = useState(0);
    let [pventa, setpventa] = useState(0);
    let [display, setDisplay] = useState(true);
    const handle = async (e:any) => {
        e.preventDefault();
        const data = await prodFetch(1);
        console.log(data)
        const dthandler = (id:number)=>{
        }
        const delHandler = (id:number)=>{
          console.log(id)
        }

        const edHandler = (id:number)=>{
            
        }
        if (display){  
          setDataShow(<Table kind='products' data={data} 
            handler={dthandler}
            handlerDelete={delHandler}
            handlerEdit={edHandler}/>
          );
        }else{
          setDataShow(<List kind='products' data={data} 
            handler={dthandler}
            handlerDelete={delHandler}
            handlerEdit={edHandler}/>
          );
        }
      };
    
    const handleViewChange = async (e:any)=>{
        setDisplay(!display);
        handle(e);
    }

    const edit = ()=>{

    }
    const create = ()=>{

    }
    
    return(<>
    <Button className="bg-green-500 my-4 rounded hover:bg-green-600 text-white" handler={handle}>Cargar</Button>
    <Button className="bg-green-500 my-4 rounded hover:bg-green-600 text-white" handler={handleViewChange}>Cambiar vista</Button>
    {dataShow}
    <div className="w-4/5">
      <CircleButton className={"p-4 duration-300 transition-all "+ (formStatus? "bg-green-500":"bg-rose-500 rotate-45")} imageClassName="" onClick={()=>{setFormStatus(!formStatus)}} src="/plus.svg"></CircleButton>
      <div className={`mx-auto bg-white p-8 rounded-lg shadow-md w-80 shadow-sm shadow-black ${formStatus? "hidden":""}`}>
        <form>
            <label className="text-green-700">
              Nombre<br/>
              <input value={name} className="text-green-700 border border-green-700" onChange={(e)=>{setName(e.target.value)}}></input>
            </label>
            <label className="text-green-700">
              Precio de compra<br/>
              <input type='number' value={pcompra} className="text-green-700 border border-green-700" onChange={(e)=>{setpcompra(e.target.value)}}></input>
            </label>
            <label className="text-green-700">
              Precio de venta<br/>
              <input type='number' value={pventa} className="text-green-700 border border-green-700" onChange={(e)=>{setpventa(e.target.value)}}></input>
            </label>
            <Button handler={editing? edit:create} className="w-full bg-green-500 hover:bg-green-600 my-4 rounded">ACEPTAR</Button>
        </form>
      </div>
    </div>
    </>)
}