import React from "react"

export default class FormTemplate extends React.Component{
        product = null
        constructor(){
            super({});
        }
        reset(){
            this.product = null
        }
        add(name){
            this.product =(
            <>
            {this.product}
            <label className="text-green-700">
            {name}<br/>
            <input className="text-green-700 border border-green-700"></input>
            </label></>)
        }
        get(){
            return this.product
        }

        render(){
            return(<></>)
        }
}