import SideBar from "@/components/Sidebar";

export default function DashLayOut({ children }) {
    return (
      <div className="flex justify-between w-full">
        <SideBar/>
        <div className="mx-auto w-4/5">{children}</div>
      </div>
    );
  }
  