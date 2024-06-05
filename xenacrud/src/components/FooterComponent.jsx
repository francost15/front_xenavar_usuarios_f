import { faFacebook, faInstagram, faSignalMessenger } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
const FooterComponent = () => {
    return (
        <div>
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
        </div>
    )
}

export default FooterComponent