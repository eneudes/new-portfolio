export function App() {
  return (
    <div className="grid grid-cols-[300px_1fr] h-screen">
      <div className="bg-gray-800 w-full border-r border-gray-500 flex flex-col justify-between">
       <div className="h-64 border-b border-gray-500 flex items-center justify-center">
        <img src="#" alt="foto perfil" className="w-52 h-52 rounded-full bg-gray-400 flex border-[7px] border-[#2e344e]" />
       </div>
       <nav className="m-1">
          <ul>
            <li><a href="#" className="visited:bg-blue-300 hover:bg-blue-300 h-10 text-center uppercase p-2 font-normal block  ">home</a></li>
            <li><a href="#" className="visited:bg-blue-300 hover:bg-blue-300 h-10 text-center uppercase p-2 font-normal block transition-colors">sobre</a></li>
            <li><a href="#" className="visited:bg-blue-300 hover:bg-blue-300 h-10 text-center uppercase p-2 font-normal block transition-colors">resumo</a></li>
            <li><a href="#" className="visited:bg-blue-300 hover:bg-blue-300 h-10 text-center uppercase p-2 font-normal block transition-colors">blogs</a></li>
            <li><a href="#" className="visited:bg-blue-300 hover:bg-blue-300 h-10 text-center uppercase p-2 font-normal block transition-colors">contato</a></li>
          </ul>
       </nav>
       <footer className="flex justify-center items-center p-2 border-t border-gray-500 h-12">
        <span className="text-sm">©2023 EneudesMatos-dev</span>
       </footer>
      
      </div>
      <main className="flex justify-center items-center bg-gray-900 w-full">
        <div className="max-w-5xl max-h-96">
          <h1 className="text-6xl font-bold text-center">Oi, eu sou <span className="text-[#037fff]">Eneudes Matos</span></h1>
          <p className="text-xl text-center leading-7 pt-3">Sou um desenvolvedor web frontend. Eu posso fornecer código limpo e pixel design perfeito. Também faço o site mais interativo com animações web.</p>
        </div>
      </main>
    </div>
  )
}
