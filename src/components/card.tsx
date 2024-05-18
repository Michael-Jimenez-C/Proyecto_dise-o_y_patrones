import Image from "next/image";
import image1 from "../../public/img/0-7.jpg"

interface Props {
  name: String; 
  workspace: String;
  image: String  
}

export default function Card(){
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-green-900 dark:border-gray-700">
      <a href="#">
        <Image className="rounded-t-lg" src={image1} alt="" width={500} height={500}/>
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Hola
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Mundo
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Acceder
        </a>
      </div>
    </div>
  );
}
