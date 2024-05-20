import ListItem from "./ListItem"
export default function List({data, handler ,handlerDelete, handlerEdit, kind}:any){
    if(kind == null){
        kind = "inv";
    }
    
    return(<div className="w-full">
        {kind=='inv'?(data.map((item:any)=>(
        <ListItem location={item['ubicacion']} name={item['nombre']} handler={()=>{handler(item['id'])}} handlerDelete={()=>{handlerDelete(item['id'])}} handlerEdit={()=>{handlerEdit(item['id'])}}></ListItem>
        ))):(data.map((item:any)=>(
            <ListItem location={'precio compra:'+item['precio_compra']+' precio venta:'+item['precio_venta']} name={item['nombre']} handler={()=>{handler(item['id'])}} handlerDelete={()=>{handlerDelete(item['id'])}} handlerEdit={()=>{handlerEdit(item['id'])}}></ListItem>
            )))}
    </div>)
}