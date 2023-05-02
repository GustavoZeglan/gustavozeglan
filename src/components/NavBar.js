// import './css/all.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars ,faHome, faUser, faFolder } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { NavLink } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
  return (
    <header>

    <NavLink to={"/"} className="logo">&lt;G/Z&gt;</NavLink>

    <NavLink className="menu"><FontAwesomeIcon icon={faBars}/></NavLink>

    <nav className="menu-desktop nav">
        <ul>
        <li><NavLink to={'/#banner'}><FontAwesomeIcon icon={faHome}/> Home</NavLink></li>
        <li><NavLink to={'/#about'}><FontAwesomeIcon icon={faUser}/> Sobre</NavLink></li>
        <li><NavLink to={'/#projects'}><FontAwesomeIcon icon={faFolder}/> Projetos</NavLink></li>
        <li><NavLink style={{color:"#d46892"}}><FontAwesomeIcon icon={faGithub}/> Contato</NavLink></li>
        </ul> 
    </nav>

    </header>
  )
}

export default NavBar