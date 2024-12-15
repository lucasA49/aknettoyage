import canape from '../assetscopy/images/canapemobi.png.jpg'
import '../styles/beneficemobi.css'
function BeneficeMobilier (){
    return (

        <><div className='benefinte'>
            <h2>Quel sont les Bénéfices de Ak Neettoyahe ?</h2>
            <h2 className='propretemobilier'>Propreté impeccable garantie</h2>
            <img className="canapbeige" src={canape} alt="" />
            <p>Notre équipe de spécialistes utilise des techniques avancées pour un nettoyage en profondeur,
                retirant les taches les plus tenaces et laissant vos surfaces comme neuves, pour une propreté qui se voit et se ressent</p>
        </div><div>
                <h3> Produits éco-responsables</h3>
            <p>Nous privilégions des produits de nettoyage respectueux de l’environnement, à faible impact 
                écologique et sans produits chimiques agressifs, afin de protéger la planète tout en assurant la sécurité de votre espace.</p>
            {/* <img src="/" alt="" /> */}
            </div>
            <div>
                {/* <img src="/" alt="" /> */}
<h4>Allongement de la durée de vie des surfaces</h4>
<p>Grâce à des méthodes d'entretien adaptées, notre service contribue à préserver la qualité et 
    l’apparence de vos moquettes et tapis sur le long terme, retardant ainsi le besoin de remplacement.</p>
            </div>
            <div>
                <h5>Avantages du Service</h5>
                <p>Plusieurs avantages s’offrent à vous avec ce service</p>
                {/* <img src="" alt="poumon" /> */}
                <p>Santé et bien-etre</p>
                <p>Réduisez les allergènes et la poussière pour un environnement plus sain et confortable.</p>
                {/* <img src="/" alt="longevité" /> */}
                <h6>Longévité du canapé</h6>
                <p>Prolongez la durée de vie de votre canapé avec un entretien professionnel.</p>
                {/* <img src="/" alt="soleil" /> */}
                <h6>Aspect neuf et frais</h6>
                <p>Retrouvez l’éclat d’origine de votre canapé pour un salon accueillant.</p>
            </div>
            </>
    
    )
}
export default BeneficeMobilier;