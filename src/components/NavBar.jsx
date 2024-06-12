import { Link } from "react-router-dom";
import { SearchComponent } from "./SearchComponent"; // Importa el SearchComponent
import logoxena from '../assets/xenavar.png';

export function NavBar() {
    return (
        <nav className="bg-white flex justify-between items-center py-4 px-4 w-full shadow-md rounded-lg">
            <Link to="/">
                <img src={logoxena} alt="logoxena" width={200} height={200} />
            </Link>
            <div>
                <ul className="flex gap-x-4">
                    <li>
                        <SearchComponent onSearch={(term) => console.log(term)} />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;