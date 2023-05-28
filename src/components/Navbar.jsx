import {useState} from "react";
import './Navbar.css';

export default function Navbar() {
  const [isHamburger, setHamburger] = useState(false);

  const showNavbar = () => {
    setHamburger(!isHamburger);
  }

  return (
      <nav>
        <div id="menu__toggle" className={"menu__toggle"} onClick={showNavbar}>☰</div>
        <nav className={`flyout__navigation ${isHamburger && 'open'}`}>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#" onClick={showNavbar} style={{display: isHamburger ? 'inline-block' : 'none'}} >Volver <i>&rarr;</i> </a></li>
          </ul>
        </nav>
      </nav>
  );
}