import FooterComponent from "../components/FooterComponent"
import { NavBarCategories } from "../components/NavBarCategories"
import acerca from "src/assets/acerca.jpeg";

export const AcercaPage = () => {
  return (
  <>
  <NavBarCategories/>
    <div className="flex flex-col items-center">
      <h1 className="mt-12 text-3xl lg:text-4xl font-bold ">¿Quienes somos?</h1>
      <h2 className="mt-8 text-xl lg:text-xl font-sans text-center">
        Somos una empresa dedicada a la venta de productos de calidad, con el fin de satisfacer las necesidades de nuestros clientes.
        <p>
        Nuestro compromiso es ofrecer productos de calidad a precios accesibles, para que nuestros clientes puedan disfrutar de una vida más saludable y feliz 🏋️‍♂️
        </p>
      </h2>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="flex flex-col lg:flex-row w-full max-w-4xl justify-center items-center">
        <div className="w-full lg:w-1/2 flex flex-col items-center space-y-4">
          <img src={acerca} alt="imagen promo" className="w-full h-auto rounded-lg" />
        </div>
      </div>
</div>
    </div>
    <FooterComponent/>
  </>
  
  )
}
export default AcercaPage