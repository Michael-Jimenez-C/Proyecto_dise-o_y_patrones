import CircleButton from "../button/CircleButton"
export default function Table({kind, data, handler, handlerDelete, handlerEdit}:any){
    return(
        <table className="border shadow-xl mx-auto">
            <tr className="rounded-lg">{Object.keys(data[0]).map((title)=>(<th className="px-2 w-16 bg-green-500 border-2">{title}</th>))}<th className="px-2 bg-green-500 border-2">Acciones</th></tr>
            {data.map((item:any)=>(<tr>{Object.values(item).map((items)=>(<td className="px-2 w-16 bg-green-400 border-2 ">{items}</td>))}
            <td className="flex">
            <CircleButton className="p-2 px-2 hover:bg-rose-500 mx-2" imageClassName="" src="/delete.svg" onClick={handlerDelete}></CircleButton>
            <CircleButton className="p-2 px-2 mx-2" imageClassName="" src="/edit.svg" onClick={handlerEdit}></CircleButton>
            </td>
            </tr>))}
        </table>
    )
}