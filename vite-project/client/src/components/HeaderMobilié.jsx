import canapé from "../assets copy/images/Canapé.png"
import "../styles/HeaderMobilié.css"

function HeaderMobilié() {
    return (
        <>
            <div className="header">
                <h1 className="headermobi">Redonnez Vie à Votre Canapé  avec AK Nettoyae</h1>

                    <img className="canapé" src={canapé} alt="Canapé-avant-apres" />
                    <h2 className="text-content">Un nettoyage professionnel pour

                        retrouver confort et propreté dans

                        votre espace.
                    </h2>
                </div>
        </>
    );
}

export default HeaderMobilié;

