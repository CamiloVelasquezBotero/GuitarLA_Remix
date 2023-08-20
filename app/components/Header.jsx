import { Link } from '@remix-run/react'
import Logo from '../../public/img/logo.svg'
import Navegacion from './Navegacion'

function Header() {
  return (
    <header className="header">
        <div className="contenedor barra">
            <Link to='/'>
                <img className='logo' src={Logo} alt="Imagen Logo" />
            </Link>
            <Navegacion /> 
        </div>
    </header>
  )
}

export default Header