import { useState } from "react";
import { Link } from "react-router-dom";

export const NavBarCategories = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <div className="antialiased bg-gray-100 dark-mode:bg-gray-900 ">
          <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-center md:flex-row md:px-6 lg:px-8">
              <div className="flex flex-row items-center justify-end p-4">
                <button
                  className=" text-red-600 rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                  onClick={toggleMenu}
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                  >
                    {isOpen ? (
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    )}
                  </svg>
                </button>
              </div>
              <nav
                className={`flex flex-col items-center pb-4 md:pb-0 ${isOpen ? 'flex' : 'hidden'} md:flex md:flex-row md:items-center md:justify-center sm:justify-end `}
              >
                <Link
                  onClick={toggleMenu}
                  className="px-4 py-2 mt-2 text-sm font-semibold text-center hover:text-red-600 md:hover:text-red-600"
                  href="/productos/proteinas"
                >
                  PROTEÍNAS
                </Link>
                <Link
                  onClick={toggleMenu}
                  className="px-4 py-2 mt-2 text-sm font-semibold text-center hover:text-red-600"
                  href="/productos/creatinas"
                >
                  CREATINAS
                </Link>
                <Link
                  onClick={toggleMenu}
                  className="px-4 py-2 mt-2 text-sm font-semibold text-center hover:text-red-600"
                  href="/productos/vitaminas"
                >
                  VITAMINAS
                </Link>
                <Link
                  onClick={toggleMenu}
                  className="px-4 py-2 mt-2 text-sm font-semibold text-center hover:text-red-600"
                  to="/acerca"
                >
                  ACERCA DE NOSOSTROS
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
