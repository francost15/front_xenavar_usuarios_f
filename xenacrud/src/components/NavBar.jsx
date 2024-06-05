import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { SearchComponent } from "./SearchComponent"; // Importa el SearchComponent
import logoxena from '../assets/xenavar.png';

function NavBar() {
    const { isAuthenticated, logout, user } = useAuth();
    const location = useLocation();

    // Define las rutas donde NO quieres mostrar el SearchComponent
    const routesWithoutSearch = ['/login', '/register', '/add-producto', '/productos', '/productos/:id'];

    // Define las rutas donde solo quieres mostrar el SearchComponent
    const routesWithOnlySearch = ['/', '/todos','/ubicacion','/acerca','/productos/proteinas'
    ,'/productos/creatinas','/productos/vitaminas','/marcas/Insane','/marcas/Dragon','/marcas/Gat','/marcas/Muscletech','/marcas/Raw','/marcas/Mutant']; // Agrega las rutas que desees

    const showSearch = !routesWithoutSearch.includes(location.pathname);
    const showOnlySearch = routesWithOnlySearch.includes(location.pathname);

    return (
        <nav className="bg-white flex justify-between items-center py-4 px-4 w-full shadow-md rounded-lg">
            <Link to={isAuthenticated ? "/productos" : "/"}>
                <img src={logoxena} alt="logoxena" width={200} height={200} />
            </Link>
            <div>
                <ul className="flex gap-x-4">
                    {showOnlySearch ? (
                        <SearchComponent />
                    ) : (
                        <>
                            {isAuthenticated ? (
                                <>
                                    <li className="text-white">
                                        Bienvenido, {user.username}
                                    </li>
                                    <li>
                                        <Link to="/add-producto" className="text-white bg-black px-4 py-2 rounded-md transition duration-200 hover:bg-gray-700">Agregar Producto</Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={() => { logout(); }} className="text-white bg-red-600 px-4 py-2 rounded-md transition duration-200 hover:bg-red-500">Salir</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link to="/login" className="text-white bg-red-600 px-4 py-2 rounded-md transition duration-200 hover:bg-red-500">Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/register" className="text-white bg-black px-4 py-2 rounded-md transition duration-200 hover:bg-gray-700">Register</Link>
                                    </li>
                                </>
                            )}
                            {showSearch && (
                                <li>
                                    <SearchComponent />
                                </li>
                            )}
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
