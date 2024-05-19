'use client'
import Button from './Button'

export default function ImageButton({src, imageClassName, href, text, className, children}){
    return (
    <Button href={href} text={text} children={`flex justify-between ${children}`} className={className}>
        <img alt="button_item" src={src} className={`px-2 ${imageClassName}`} />
        {children}
    </Button>)
}