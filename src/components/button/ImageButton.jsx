'use client'
import ButtonNav from './ButtonNav'

export default function ImageButton({src, imageClassName, href, text, className, children}){
    return (
    <ButtonNav href={href} text={text} children={`flex justify-between px-1 ${children}`} className={className}>
        <img alt="button_item" src={src} className={`pr-4 ${imageClassName}`} />
        {children}
    </ButtonNav>)
}