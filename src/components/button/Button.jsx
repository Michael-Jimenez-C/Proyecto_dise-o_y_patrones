'use client'

export default function Button({handler, children, className}){    return (<button
        className={`py-2.5 md:px-5 px-4 text-black select-none duration-300 transition-colors hover:cursor-pointer hover:text ${className}`}
        onClick={handler}
      >
        {children}
      </button>)
}