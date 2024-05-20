import CircleButton from "@/components/button/CircleButton"
import React from "react"

export default class ListItem extends React.Component{
    name = null
    location = null
    handler = ()=>{}
    handlerDelete = ()=>{}
    handlerEdit = ()=>{}
    constructor({name, location, handler, handlerDelete, handlerEdit}:any){
    super({});
    this.name = name
    this.location = location
    this.handler = handler
    this.handlerDelete = handlerDelete
    this.handlerEdit = handlerEdit
    }

    render(){
        return(<div className="w-full rounded-xl p-5 my-2 bg-green-600 flex justify-between " >
        <div className="cursor-pointer" onClick={this.handler}>
        <h2>{this.name}</h2>
        <h3>{this.location}</h3>
        </div>
        <div>
        <CircleButton className="hover:bg-rose-500" imageClassName="" src="/delete.svg" onClick={this.handlerDelete}></CircleButton>
        <CircleButton className="" imageClassName="" src="/edit.svg" onClick={this.handlerEdit}></CircleButton>
        </div>
        </div>)
    }
}