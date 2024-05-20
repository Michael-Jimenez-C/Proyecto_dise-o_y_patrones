'use client'

export default class IButton{
  handler = ()=>{}
  children = null
  className = ""
  constructor({handler, children, className}){
    this.handler = handler
    this.children = children
    this.className = className
  }
}