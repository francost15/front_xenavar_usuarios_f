import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import AcercaPage from "./pages/AcercaPage"
import HomePage from "./pages/HomePage"
import Ubicacionpage from "./pages/UbicacionPage"
import Productoscards from "./pages/Productoscards"

export const AppXena = () => {
  return (
        <BrowserRouter>
          <main className='container '>
          <NavBar/>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/acerca' element={<AcercaPage/>} />
            <Route path='/ubicacion' element={<Ubicacionpage/>} />
            <Route path='/todos' element = {<Productoscards/>} />
            <Route path='/productos/proteinas' element = {<Productoscards/>} />
            <Route path='/productos/creatinas' element = {<Productoscards/>} />
            <Route path='/productos/vitaminas' element = {<Productoscards/>} />
            <Route path='/marcas/:marca' element = {<Productoscards/>} />
          </Routes>
          </main>
        </BrowserRouter>
  )
}