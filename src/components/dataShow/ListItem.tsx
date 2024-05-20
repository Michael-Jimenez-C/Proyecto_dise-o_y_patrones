import CircleButton from "@/components/button/CircleButton"
export default function ListItem({name, location, id, handlerDelete, handlerEdit}){
    return(<div className="w-full rounded-xl p-5 my-2 bg-green-600 flex justify-between">
        <div>
        <h2>{name}</h2>
        <h3>{location}</h3>
        </div>
        <div>
        <CircleButton className="hover:bg-rose-500" imageClassName="" src="/delete.svg" onClick={handlerDelete}></CircleButton>
        <CircleButton className="" imageClassName="" src="/edit.svg" onClick={handlerEdit}></CircleButton>
        </div>
    </div>)
}