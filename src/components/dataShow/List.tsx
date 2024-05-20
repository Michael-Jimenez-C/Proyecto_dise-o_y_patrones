import ListItem from "./ListItem"
import IShowStrategy from "./IShowStrategy"
export default class Table extends IShowStrategy{
    render(){
            return(this.kind =='inv'?(<div className="w-full">
            {((this.data || []).map((item:any)=>(
            <ListItem location={item['ubicacion']} name={item['nombre']} handler={()=>{this.handler(item['id'])}} handlerDelete={()=>{this.handlerDelete(item['id'])}} handlerEdit={()=>{this.handlerEdit(item['id'])}}></ListItem>
            )))}    
                </div>):(<div className="w-full">
            {((this.data || []).map((item:any)=>(
                <ListItem location={'precio compra:'+item['precio_compra']+' precio venta:'+item['precio_venta']} name={item['nombre']} handler={()=>{this.handler(item['id'])}} handlerDelete={()=>{this.handlerDelete(item['id'])}} handlerEdit={()=>{this.handlerEdit(item['id'])}}></ListItem>
                )))}    
                </div>))
    }
}