import { useState } from 'react';
import { CardsComponent } from '../components/CardsComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faSignalMessenger } from '@fortawesome/free-brands-svg-icons'
import { NavBarCategories } from '../components/NavBarCategories';
import { Link } from 'react-router-dom';
import imagen1 from '../assets/imagen1.jpg';
import mutant from "../assets/mutant.jpg";
import raw from "src/assets/raw.jpg";
import gat from "src/assets/gat.png" ;
import muscletech from "src/assets/Muscletech.png";
import insane from "src/assets/insanelogo.png";
import dragon from "src/assets/Dragonlogo.jpg" ;
import img1 from "src/assets/img1.jpg";
import img2 from "src/assets/img2.jpg";
import img3 from 'src/assets/img3.jpg';

const images = [
  {img1},
  {img2},
  {img3},
  {img1},
];

export function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const back = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const next = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
    <NavBarCategories/>
    <article className="relative w-full flex flex-shrink-0 overflow-hidden shadow-2xl">
      {images.map((image, index) => (
        <figure key={index} className={`h-96 ${currentIndex === index ? 'block' : 'hidden'}`}>
          <img src={image} alt="Image" className="absolute inset-0 z-10 h-full w-full object-cover opacity-80" />
        </figure>
      ))}

      <button onClick={back} className="absolute left-14 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200">
        <svg className=" w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7">
            </path>
        </svg>
      </button>

      <button onClick={next} className="absolute right-14 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200">
        <svg className=" w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </article>
    {/* cards */}
    <div className='flex justify-center flex-col items-center'>
    <h1 className='text-center text-3xl font-bold mt-8'>Marcas de Xenavar</h1>
    <div className='grid grid-cols-3 gap-3 mt-6'>
          <Link to="/marcas/Dragon">
            <CardsComponent imagen={dragon} className="w-72 h-full object-scale-down" />
          </Link>
          <Link to="/marcas/Insane">
            <CardsComponent imagen={insane} className="w-72 h-full object-scale-down" />
          </Link>
          <Link to="/marcas/Muscletech">
            <CardsComponent imagen={muscletech} className="w-72 h-full object-scale-down" />
          </Link>
          <Link to="/marcas/Gat">
            <CardsComponent imagen={gat} className="w-72 h-full object-scale-down" />
          </Link>
          <Link to="/marcas/Raw">
            <CardsComponent imagen={raw} className="w-72 h-full object-scale-down" />
          </Link>
          <Link to="/marcas/Mutant">
            <CardsComponent imagen={mutant} className="w-72 h-full object-scale-down" />
          </Link>
        </div>
  </div>
  {/* banner */}
  <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
    <div role="alert" className="relative block w-full text-base font-regular px-4 py-4 rounded-lg  bg-gradient-to-r from-red-500 to-red-900 text-white">
      <div className=" mr-12">
        <p className="font-bold text-black">
          Encuentra las mejores promociones
          <span className="text-white"> solamente en Xenavar Suplements</span>
          
          <span title="todos" className="inline-flex items-center justify-center text-sm font-bold text-yellow-300 transition-all ml-4 duration-200 rounded-md hover:text-gray-700" role="button">
          <Link to="/todos">Get Now</Link><svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
          </span>
        </p>
      </div>
    </div>
  </div>
      {/* section */}
      <div className="flex justify-center  mx-auto px-4 sm:px-6 lg:px-8">
      <div className=" flex flex-col lg:flex-row w-full max-w-4xl">
        <div className="w-full lg:w-1/2 flex flex-col items-center space-y-4 mt-10 lg:mt-0 ">
          <img src={imagen1} alt="imagen promo" className="w-full h-auto rounded-lg" />
        </div>
        <div className="mt-12 flex flex-col items-center w-full lg:w-1/2 space-y-4">
          <h1 className="md:mt-12 text-3xl lg:text-4xl font-bold text-center">Encuentra todos los productos que necesites</h1>
          <h2 className="text-xl lg:text-xl font-sans text-center">
          <strong>No encuentras lo que buscas? </strong>No dudes en contactarnos. y te ayudaremos a encontrarlos.
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

      <footer className='text-center bg-black text-white text-sm mt-8'>
        <div className='grid grid-cols-3 gap-3 mt-6'>
          <div>
            <h1 className="mt-6 text-1xl font-bold">DUDAS</h1>
            <ul className='mt-4 hover:text-red-600'>¿Cómo comprar?</ul>
            <ul className='mt-2 hover:text-red-600'>
            <Link to="/ubicacion">
            ¿Donde se encuentra?
            </Link>  
            </ul>
          </div>
          <div>
            <h1 className="mt-6 text-1xl font-bold">NECESITAS AYUDA</h1>
            <ul className='mt-4'>Lunes a Sabado 8:00am - 7:00pm</ul>
            <ul className='mt-2 hover:text-red-600'>
            <a href="https://api.whatsapp.com/send?phone=522224568189&text=Hola,%20tengo%20una%20consulta" target="_blank">
            <FontAwesomeIcon icon={faSignalMessenger} style={{ fontSize: '25px', marginRight: '10px' }} className='hover:text-red-600' />
            Chat / Email
            </a>
            </ul>
          </div>
          <div>
            <h1 className="mt-6 text-1xl font-bold text-center">NOSOTROS</h1>
            <div>
              <ul className='mt-4 hover:text-red-600'>
              <Link to="/acerca">
                Quienes somos
              </Link>
              </ul>
              <ul className='mt-2 hover:text-red-600'>Blog</ul>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-4'>
          {/* logo de facebook e instagram */}
          <a href="https://www.facebook.com/profile.php?id=100086923053408&locale=es_LA" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '25px', marginRight: '10px' }} className='hover:text-red-600' />
          </a>
          <a href="https://www.instagram.com/xenavar_suplementos/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '25px', marginLeft: '10px' }} className='hover:text-red-600'/>
          </a>
        </div>
        <hr className='mt-4 bg-slate-800' />
        <div>
          <p className='text-center mt-4'>© 2024 Xenavar. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default HomePage;