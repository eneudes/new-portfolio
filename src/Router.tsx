import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Resumo } from './pages/Resumo';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sobre' element={<Sobre/>} />
      <Route path='/resumo' element={<Resumo/>} />
    </Routes>
  )
}