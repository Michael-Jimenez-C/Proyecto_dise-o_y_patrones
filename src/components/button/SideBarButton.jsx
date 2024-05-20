import IconButton from './IconButton'

export default function SideBarButton({children, src, handler, className, imageClassName}) {
    return (
        <IconButton src={src} handler={handler} className={className} imageClassName={`mx-1 p-2 pr-2 rounded-full bg-slate-100 ${imageClassName}`}>
        <div className="text-green-700 group-hover:text-green-200 text-center mx-auto text-xl">
          {children}
        </div>
        </IconButton>
    );
  }