import { NavBar } from './NavBar'
import logoTRA from '../assets/images/TRA.png'

export const Header = () => {
  return (
    
  <header className=" flex place-content-between items-center mb-2">

    <img className="w-20 h-25" src={logoTRA} alt="LogoTRA" />
    <NavBar />


  </header>
  )
}

