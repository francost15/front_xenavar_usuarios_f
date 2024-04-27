import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { SearchComponent } from "./SearchComponent"; // Add missing import statement
// import { NavBarCategories } from "./NavBarCategories";

function NavBar() {
    const {isAuthenticated,logout,user} = useAuth();
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
    <nav className={isHomePage ? "bg-white flex justify-between items-center py-4 px-4 w-full shadow-md rounded-lg " : "bg-white flex justify-between items-center py-4 px-4 w-full shadow-md rounded-lg "}>
        <Link to={isAuthenticated ? "/productos" : "/"}>
            <img src="src/assets/xenavar.png" alt="logoxena" width={200} height={200} />
        </Link>
        <div>
            <ul className="flex gap-x-4">
                {isAuthenticated ? (
                    <>
                    <li className="text-white">
                        Bienvenido, {user.username}
                    </li>
                    {!isHomePage && (
                        <>
                        <li>
                            <Link to="/add-producto" className="text-white bg-black px-4 py-2 rounded-md transition duration-200 hover:bg-gray-700">Agregar</Link>
                        </li>
                        <li>
                            <Link to="/" onClick={()=> {logout();}} className="text-white bg-red-600 px-4 py-2 rounded-md transition duration-200 hover:bg-red-500">Salir</Link>
                        </li>
                        </>
                    )}
                    </>
                ) : (
                    <>
                    {!isHomePage && (
                        <>
                        <li>
                            <Link to="/login" className="text-white bg-red-600 px-4 py-2 rounded-md transition duration-200 hover:bg-red-500">Login</Link>
                        </li>
                        <li>
                            <Link to="/register" className="text-white bg-black px-4 py-2 rounded-md transition duration-200 hover:bg-gray-700">Register</Link>
                        </li>
                        </>
                    )}
                    </>
                )}
                {isHomePage && (
                <SearchComponent/>
                // <NavBarCategories/>
                )}
            </ul>
        </div>
    </nav>
  )
}

export default NavBar;