import { Link } from 'react-router-dom'
import menu from '../assets/images/menu.png'


export const NavBar = () => {
    return (
        <>
<ul className="hidden sm:flex text-[16px] text-AzulClaro font-bold sm:w-[438px] sm:place-content-around sm:text-[20px] sm:items-center">
  <li>
    <Link className="hover:text-AzulOscuro" to="/">Inicio</Link>
  </li>
  <li>
    <Link className="hover:text-AzulOscuro" to="/nosotros">Nosotros</Link>
  </li>
  <li>
    <Link className="hover:text-AzulOscuro" to="/publicaciones">Publicaciones</Link>
  </li>
  <li>
    <Link className="hover:text-AzulOscuro" to="/galeria">Galería</Link>
  </li>
</ul>


<img className='w-20 h-20 cursor-pointer sm:hidden' src= {menu} alt="menu_desplegable"/>
</>



    )
}

