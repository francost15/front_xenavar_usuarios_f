import FooterComponent from "../components/FooterComponent"
import { NavBarCategories } from "../components/NavBarCategories"

export const Ubicacionpage  = () => {
  return (
    <div>
    <NavBarCategories/>
    <div className="flex justify-center mx-auto px-4 sm:px-6 lg:px-8">
      <div className=" flex flex-col lg:flex-row w-full max-w-5xl">
        <div className="w-full lg:w-1/2 flex flex-col items-center space-y-4 mt-10 lg:mt-5 ">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1121.427832672608!2d-98.21558048595581!3d19.018903017179053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc16a3a719f17%3A0xf08fcd41055ceb1e!2sXenavar%20Suplementos!5e0!3m2!1ses!2smx!4v1715836575475!5m2!1ses!2smx"  
            width="600" 
            height="450" 
            allowFullScreen="" 
            loading="lazy"
          />
        </div>
        <div className="mt-12 flex flex-col items-center w-full lg:w-1/2 space-y-4">
          <h1 className="md:mt-12 text-3xl lg:text-4xl font-bold text-center">Nos encontramos en</h1>
          <h2 className="text-xl lg:text-xl font-sans text-center">
          📍Calle Nuevo León #305 Col. El Cerrito, Puebla
          <p>⏰ Lunes de 10 A.M. -1:30 P.M.</p>
          <p>⏰Martes a Viernes de 10 A.M. - 7 P.M.</p>	
          <p>📞 222 456 8189</p>
          </h2>
        <div className="mt-4"></div>
          <a href="https://api.whatsapp.com/send?phone=522224568189&text=Hola,%20tengo%20una%20consulta" target="_blank">
            <button className=" animate__animated animate__heartBeat group relative h-12 w-48 overflow-hidden rounded-md bg-red-600 text-lg font-bold text-white">
            Escribenos
              <div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>
          </a>
        </div>
      </div>
    </div>
    <FooterComponent/>
  </div>
  )
}

export default Ubicacionpage