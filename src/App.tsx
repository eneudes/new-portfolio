import {Link } from "react-router-dom";
import { Router } from "./Router";
import perfil from './assets/perfil.svg'

export function App() {
  return (
    <div className="grid grid-cols-[300px_1fr] h-screen">
      <div className="bg-gray-800  border-r border-gray-500 flex flex-col justify-between">
       <div className="h-64 border-b border-gray-500 flex items-center justify-center">
        <Link to={'/'} ><img src={perfil} alt="Eneudes matos" className="w-56 h-56 rounded-full bg-gray-400 flex border-[2px] border-[#2e344e]" /></Link>
       </div>
       <nav className="m-1">
          <ul>
            <li><Link to={'/'} className="visited:bg-blue-300 hover:bg-blue-300 h-10 text-center uppercase p-2 font-normal block  ">home</Link></li>
            <li><Link to={'/sobre'} className="visited:bg-blue-300 hover:bg-blue-300 h-10 text-center uppercase p-2 font-normal block transition-colors">sobre</Link></li>
            <li><Link to={'/resumo'} className="visited:bg-blue-300 hover:bg-blue-300 h-10 text-center uppercase p-2 font-normal block transition-colors">resumo</Link></li>
            <li><Link to={'/blogs'} className="visited:bg-blue-300 hover:bg-blue-300 h-10 text-center uppercase p-2 font-normal block transition-colors">blogs</Link></li>
            <li><Link to={'/contato'} className="visited:bg-blue-300 hover:bg-blue-300 h-10 text-center uppercase p-2 font-normal block transition-colors">contato</Link></li>
          </ul>
       </nav>
       <footer className="flex justify-center items-center p-2 border-t border-gray-500 h-12">
        <span className="text-sm">©2023 EneudesMatos-dev</span>
       </footer>
      </div>
      <div className="bg-gray-900 w-full h-[700px] scroll-auto">
      
        <Router/>
      </div>
    </div>
  )
}
