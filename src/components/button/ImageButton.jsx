'use client'
import Button from './Button'

export default function ImageButton({src, imageClassName, href, text, className, children}){
    return (
    <Button href={href} text={text} children={`flex justify-between px-1 ${children}`} className={className}>
        <img alt="button_item" src={src} className={`pr-4 ${imageClassName}`} />
        {children}
    </Button>)
}