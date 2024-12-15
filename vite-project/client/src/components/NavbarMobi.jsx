import logo from "../assetscopy/images/aknettoyage.png";
import tel from "../assetscopy/images/telephone.jpg";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";
function NavbarMobi() {
    return (
     <header>
          <nav id="top-nav">
            <NavLink to="/">
              <img className="logo" src={logo} alt="" />
            </NavLink>
            <div id="contact-nav">
              <img src={tel} alt="" />
              <a className="numero-tel" href="tel:0756936273">
                0756936273
              </a>
    
              <NavLink to="/Contact">CONTACTEZ NOUS</NavLink>
            </div>
          </nav>
    
          {/* EN ATTENTE DE ROOT POUR LE BOUTON !! */}
          <nav id="banner">
            <NavLink to="/NéttoyageIntérieur">Lavage Intérieur</NavLink>
            <NavLink to="/Néttoyageextérieur">Lavage Extérieur </NavLink>
            <NavLink to="/Mobilier">
              Nettoyage de Mobilier textille
            </NavLink>
          </nav>
          </header>

    );
}
export default NavbarMobi;