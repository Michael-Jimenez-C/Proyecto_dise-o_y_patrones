'use client'
import { useGlobalContext } from "@/context/globalContext";
import Button from "../button/Button";
import invFetch from "@/lib/dashboard/invFetch"
export default function Inventories(){
    const {invs, getInvs} = useGlobalContext();
    const handle = async (e) => {
        e.preventDefault();
        const data = await invFetch(1);
        console.log(data)
      };
    
    return(<><Button className="" handler={handle}>a</Button></>)
}