import "../styles/Header.css";
import { NavLink } from "react-router-dom";
import imgBanner from "../assetscopy/images/background-header.jpg";
import logo from "../assetscopy/images/aknettoyage.png";
import tel from "../assetscopy/images/telephone.jpg";

function Header() {
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

      <section id="banner-image">
        <img src={imgBanner} alt="" />
        <div className="blue-banner" />
        <hgroup>
          <h3>Lavage intérieur à partir de 30€</h3>
          <h3>Lavage Extérieur à partir de 30€</h3>
          <h3>Lavage intérieur à partir de 25€</h3>
        </hgroup>
      </section>
    </header>
  );
}

export default Header;
