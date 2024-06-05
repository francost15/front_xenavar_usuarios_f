/* eslint-disable react/prop-types */
export const CardsComponent = ({imagen,className}) => {
    return (
      <div className="group relative m-0 flex flex-col sm:flex-row h-auto w-full  rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
        <div className="hover:border-red-600 z-10 h-64 w-full sm:h-64 sm:w-full md:h-64 md:w-full lg:h-64 lg:w-full xl:h-64 xl:w-full 2xl:h-64 2xl:w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100">
            <img src={imagen} alt="imagen" className={className} />
        </div>
      </div>
    )
  }