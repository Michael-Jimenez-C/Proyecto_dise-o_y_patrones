'use client'
import Button from './Button'

export default function IconButton({src, imageClassName, handler, className, children}){
    return (
    <Button handler={handler} className={`py-4 text-green-700 hover:bg-green-800 group rounded transition-colors duration-300 flex justify-center items-center select-none ${className}`}>
        <img alt="button_item" src={src} className={`pr-2 ${imageClassName}`} />
        {children}
    </Button>)
}