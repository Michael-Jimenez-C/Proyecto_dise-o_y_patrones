import Navbar from "@/components/navbar";
import Card from "@/components/card";


export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col bg-green-300">
      <div className="z-10 w-full m-0 items-center">
        <div className="md:flex md:justify-between bg-white max-h-max">
          <img
            src="./logo.svg"
            className="h-16 relative md:mx-10 mx-auto my-auto select-none"
          ></img>
          <Navbar />
        </div>
      </div>
      <div className="h-full flex flex-row justify-between items-center p-20">
          <Card />
          <Card />  
          <Card />
      </div>
    </main>
  );
}
