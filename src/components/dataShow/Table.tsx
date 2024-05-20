import IShowStrategy from "./IShowStrategy"
import CircleButton from "../button/CircleButton"
export default class Table extends IShowStrategy{
    render(){
        return(<table className="border shadow-xl mx-auto">
            <tr className="rounded-lg">{Object.keys((this.data||[])[0]).map((title)=>(<th className="px-2 w-16 bg-green-500 border-2">{title}</th>))}<th className="px-2 bg-green-500 border-2">Acciones</th></tr>
            {(this.data || []).map((item:any)=>(<tr>{Object.values(item).map((items:any)=>(<td className="px-2 w-16 bg-green-400 border-2 ">{items}</td>))}
            <td className="flex">
            <CircleButton className="p-2 px-2 hover:bg-rose-500 mx-2" imageClassName="" src="/delete.svg" onClick={this.handlerDelete}></CircleButton>
            <CircleButton className="p-2 px-2 mx-2" imageClassName="" src="/edit.svg" onClick={this.handlerEdit}></CircleButton>
            </td>
            </tr>))}
        </table>)
    }
}