import Navbar from './navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-0 bg-green-300">
      <div className="z-10 w-full m-0">
         <div className="md:flex md:justify-between bg-white max-h-max">
          <img src="./logo.svg" className="h-16 relative md:mx-10 mx-auto my-auto select-none"></img>
          <Navbar></Navbar>
         </div>
         <div>
            <div className="bg-gradient-to-b from-white  via-green-100 to-green-400 h-screen w-full box-border py-24">
              <h1 className='text-green-800 text-center mx-16 font-bold text-5xl'>Uranium<span className='text-green-500'>Ex</span></h1>
              <h2 className='text-green-800 text-center mx-16 italic text-4xl'>El mejor software empresarial para impulsar tu negocio</h2>
            </div>
         </div>
      </div>
    </main>
  );
}
