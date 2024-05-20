import ListItem from "./ListItem"
export default function List({data, handlerDelete, handlerEdit}){
    
    
    return(<div className="w-full">
        {data.map((item)=>(
        <ListItem location={item['ubicacion']} name={item['nombre']} handlerDelete={()=>{handlerDelete(item['id'])}} handlerEdit={()=>{handlerEdit(item['id'])}}></ListItem>
        ))}
    </div>)
}