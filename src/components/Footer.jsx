import FooterSection from "./FooterSection.jsx";

import './Footer.css'

export default function Footer() {
  return(
      <footer>
        <div className="footer-top">

          <FooterSection nameSection={"Navegacion"}>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Productos</a></li>
              <li><a href="#">Promociones</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </FooterSection>

          <FooterSection nameSection={"Categorias"}>
            <ul>
              <li><a href="#">Ropa</a></li>
              <li><a href="#">Calzado</a></li>
              <li><a href="#">Accesorios</a></li>
            </ul>
          </FooterSection>

          <FooterSection nameSection={"Servicio al Cliente"}>
            <ul>
              <li><a href="#">Ayuda</a></li>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Términos y condiciones</a></li>
            </ul>
          </FooterSection>

        </div>

        <div className="footer-bottom">
          <strong><p>&copy; 2023 eCommerce. Todos los derechos reservados.</p></strong>
        </div>

      </footer>

  );
}