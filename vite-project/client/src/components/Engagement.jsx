import soinparticulier from "../assets/icones/soinparticulier.png";
import materieladaptée from "../assets/icones/materieladaptée.png";
import produitbio from "../assets/icones/produitbio.png";
import "../styles/Accueil.css";

function Engagement() {
  return (
    <div className="card-grey">
      <div className="logo-text-container">
        <img className="imgbio" src={produitbio} alt="" />
        <div className="text-engagement-container">
          <h4>Produits Bio et écologique</h4>
          <p className="p-bio">
            Dans le cadre d'une démarche <br /> éco-responsable, nous
            n'utilisons que des produits bio et écologique
          </p>
        </div>
      </div>
      <div className="logo-text-container">
        <img className="imgmateriel" src={materieladaptée} alt="" />
        <div className="text-engagement-container">
          <h4> Du matériel adaptés</h4>
          <p className="pmateriel">
            Parce que tous les véhicules ne se ressemblent pas <br /> AK
            nettoyage a su adapter son matériel à votre véhicule
          </p>
        </div>
      </div>
      <div className="logo-text-container">
        <img src={soinparticulier} alt="" />
        <div className="text-engagement-container">
          <h4>Soin particulier</h4>
          <p>
            Un soin particulier est apporté en fonction <br />
            du matériau de votre voiture
          </p>
        </div>
      </div>
    </div>
  );
}

export default Engagement;
