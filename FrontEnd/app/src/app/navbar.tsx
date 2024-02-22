export default function Navbar(){
  let menu=['Home','Pricing','About','Ingresar'];
    return(
        <nav className="relative md:mx-10 mx-auto mt-8 flex justify-center">
            <ol>
              {
                menu.map((item)=>(
                  <li className="inline-flex " key={'menu-'+item}>
                    <a href="" className="py-2.5 md:px-5 px-4 text-black hover:bg-green-500 select-none hover:cursor-pointer">
                    {item}
                    </a>
                  </li>
                ))
              }
            </ol>
          </nav>
    )
}