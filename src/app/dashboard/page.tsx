import Navbar from "@/components/navbar";
import Card from "@/components/card";
import {useGlobalContext} from "@/context/globalContext"

export default function Dashboard() {
  const {user, setOrg} = useGlobalContext();
  return (
    
      <div className="h-full flex flex-row justify-between items-center pt-20">
          <Card />
          <Card />  
          <Card />
      </div>

  );
}
