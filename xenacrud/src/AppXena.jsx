import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { LoginPage,RegisterPage } from './pages';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import ProtectedRoute from './ProtectedRoute';
import { ProductProvider } from './context/ProductosContext';
import NavBar from './components/NavBar';
import ProductoFormPage from './pages/ProductoFormPage';
import ProductosPage from './pages/ProductoPage';
import AcercaPage from './pages/sectionshome/AcercaPage';
import Ubicacionpage from './pages/sectionshome/UbicacionPage';
import Productoscards from './pages/sectionshome/Productoscards';
export const AppXena = () => {
  return (
    <AuthProvider>
      <ProductProvider>
      <BrowserRouter>
        <main className='container '>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/acerca' element={<AcercaPage/>} />
          <Route path='/login' element = {<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/ubicacion' element={<Ubicacionpage/>} />
          <Route path='/todos' element = {<Productoscards/>} />
          <Route path='/productos/proteinas' element = {<Productoscards/>} />
          <Route path='/productos/creatinas' element = {<Productoscards/>} />
          <Route path='/productos/vitaminas' element = {<Productoscards/>} />
          <Route path='/marcas/:marca' element = {<Productoscards/>} />
          
          <Route element={<ProtectedRoute/>} >
            <Route path='/productos' element={<ProductosPage/>} />
            <Route path='/add-producto' element={<ProductoFormPage/>} />
            <Route path='/productos/:id' element={<ProductoFormPage/>} />
          </Route>

        </Routes>
        </main>
      </BrowserRouter>
      </ProductProvider>
    </AuthProvider>
  )
}