import canapé from "../assets copy/images/Canapé.png"
import "../styles/HeaderMobilié.css"

function HeaderMobilié() {
    return (
        <>
            <div className="header">
                <div className="text-content">
                    <h1 className="header">Redonnez
                        <br />
                        <br />
                        Vie à Votre Canapé
                        <br />
                        <br />
                        avec AK Nettoyae</h1>
                    <h2 className="header-secondaire">Un nettoyage professionnel pour
                        <br />
                        <br />
                        retrouver confort et propreté dans
                        <br />
                        <br />
                        votre espace.
                    </h2>
                </div>

                <div className="header-images">
                    <img className="Canapé" src={canapé} alt="Canapé-avant-apres" />
                </div>
            </div>
        </>
    );
}

export default HeaderMobilié;

