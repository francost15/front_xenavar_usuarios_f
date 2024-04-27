import { useState } from 'react';

export const SearchComponent = () => {
  const [isInputShown, setIsInputShown] = useState(false);

  const handleIconClick = (event) => {
    event.preventDefault();
    setIsInputShown(!isInputShown);
  };

  return (
    <form className="flex items-center justify-between w-full md:w-auto">
      <div className="flex-grow">
        {(isInputShown || window.innerWidth > 768) && (
          <input
            type="text"
            className="w-full px-3 py-2 text-xs md:text-sm text-gray-700 placeholder-gray-600 border rounded-lg focus:outline-none focus:border-red-500"
            placeholder="¿Qué podemos ayudarte a encontrar?"
          />
        )}
      </div>
      <button type="submit" className="ml-2" onClick={handleIconClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </form>
  );
};