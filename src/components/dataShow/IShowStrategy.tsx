import React from "react";
export default class IShowStrategy extends React.Component{
    kind = null
    data = null
    handler = null
    handlerDelete = null
    handlerEdit = null
    constructor({kind, data, handler, handlerDelete, handlerEdit}:any){
        super({});
        this.kind = kind;
        this.data = data;
        this.handler = handler;
        this.handlerDelete=handlerDelete
        this.handlerEdit = handlerEdit
    }
}