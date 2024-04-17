import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavBar() {
    const {isAuthenticated,logout,user} = useAuth();
    return (
    <nav className="bg-zinc-700 flex justify-between items-center py-4 px-4 w-full shadow-md">
        <Link to={isAuthenticated ? "/tasks" : "/"}>
            <img src="src/assets/xenavar.png" alt="logoxena" width={200} height={200} />
        </Link>
        <div>
            <ul className="flex gap-x-4">
                {isAuthenticated ? (
                    <>
                    <li className="text-white">
                        Bienvenido, {user.username}
                    </li>
                    <li>
                        <Link to="/add-task" className="text-white bg-sky-600 px-4 py-2 rounded-md transition duration-200 hover:bg-sky-500">Agregar</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={()=> {logout();}} className="text-white bg-red-600 px-4 py-2 rounded-md transition duration-200 hover:bg-red-500">Salir</Link>
                    </li>
                    </>
                ) : (
                    <>
                    <li>
                        <Link to="/login" className="text-white bg-red-600 px-4 py-2 rounded-md transition duration-200 hover:bg-red-500">Login</Link>
                    </li>
                    <li>
                        <Link to="/register" className="text-white bg-sky-600 px-4 py-2 rounded-md transition duration-200 hover:bg-sky-700">Register</Link>
                    </li>
                    </>
                )}
            </ul>
        </div>
    </nav>
  )
}

export default NavBar;