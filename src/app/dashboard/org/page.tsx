'use client'
import SideBar from "@/components/Sidebar"
import DashLayOut from "@/components/layouts/DashLayOut"
import {useGlobalContext} from "@/context/globalContext"
import Inventories from "@/components/dashboard_components/Inventories"
export default function Org() {
  const { isLogged, activeMenu} = useGlobalContext();
  return(<>
    <div className="w-full min-h-screen h-full bg-green-300">
      <DashLayOut>
        {activeMenu == 'Inventarios'? <Inventories/>:""}
      </DashLayOut>
    </div>
  </>)
}
