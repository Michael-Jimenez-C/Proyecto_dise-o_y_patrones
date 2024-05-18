import Navbar from '../navbar';

export default function Products() {
  return (
    <main className="flex min-h-screen flex-col items-center p-0 bg-green-300">
      <div className="z-10 w-full m-0">
         <div className="md:flex md:justify-between bg-white max-h-max">
          <img src="./logo.svg" className="h-16 relative md:mx-10 mx-auto my-auto select-none"></img>
          <Navbar></Navbar>
         </div>
         <div>
            
         </div>
      </div>
    </main>
  );
}
