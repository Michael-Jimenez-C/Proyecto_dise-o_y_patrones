import Image from "next/image";
import image1 from "../../public/img/0-7.jpg"
import Button from "./button/Button";
import { useGlobalContext } from "@/context/globalContext";
import { useRouter } from 'next/navigation'

interface Props {
  name: String; 
  workspace: String;
}

export default function Card({name, workspace}: Props){

  const {organizacion, setOrg} = useGlobalContext();
  const router = useRouter()
  console.log({organizacion, setOrg})
  
  const handle = () => {
    setOrg({name: name, workspace: workspace})
    router.push('/dashboard/org')
  };


  return (
    <div className="max-w-sm ml-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-green-900 dark:border-gray-700">
      <a href="#">
        <Image className="rounded-t-lg" src={image1} alt="" width={500} height={500}/>
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {workspace}
        </p>
         <Button handler={handle} className="" children="acceder"/>
      </div>
    </div>
  );
}
