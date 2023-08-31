import { Link } from "react-router-dom";
import perfil from "./assets/perfil.svg";

export function App() {
  return (
    <div className="container m-auto h-screen p-4 bg-red-200 rounded-md" >
      <div className=" bg-[#20202a] shadow-lg shadow-zinc-700 w-72 h-[calc(100vh-30px)] fixed ">
        <nav className="p-7 bg-slate-800">
          <header className="h-48 flex-col flex items-center bg-[rgba(35, 35, 45, 0.98) 100%)] shadow-zinc-800 shadow ">
          <Link to={'/'} className="w-24 h-24 rounded-full block ">
            <img src={perfil} alt="" className="rounded-full"/>
          </Link>
          <h1 className="font-bold text-base pt-4">Eneudes Matos</h1>
          <p className="font-normal text-sm">Front end developer</p>
          </header>
          <div className="py-8 border-b border-zinc-400">
            <ul >
              <li className="flex justify-between font-normal text-sm pb-1"><h6>País:</h6><p>Brasil</p></li>
              <li className="flex justify-between font-normal text-sm pb-1"><h6>Cidade:</h6><p>Macapá</p></li>
              <li className="flex justify-between font-normal text-sm pb-1"><h6>Idade:</h6><p>33</p></li>
            </ul>
          </div>
      
          <div className=" py-8 border-b border-zinc-400 flex gap-2 ">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-14 h-14 bg-zinc-800 rounded-full text-center">
                <span>100%</span>
              </div>
            </div>
            <div className="w-20 h-20 bg-green-500 rounded-full"></div>
            <div className="w-20 h-20 bg-green-500 rounded-full"></div>
          </div>
        </nav>
      </div>


      <main className="bg-green-200 h-[calc(100vh-30px)] ml-[300px] w-[calc(100%-300px)] overflow-hidden ">
        <div className="p-5 h-[calc(100vh-30px)] overflow-y-auto">
            <div className=" bg-slate-500 h-[800px]"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni non ut adipisci recusandae, illum veniam voluptatum architecto reiciendis quisquam, est repellat, cum maiores? Dolores quibusdam amet, natus asperiores tempore dolor.</div>
            <div className="w-full bg-green-500 h-[800px]"></div>
        </div>
      </main>
      
    </div>
  );
}
