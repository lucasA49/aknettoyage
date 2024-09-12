import "../styles/Accueil.css";
import Header from "../components/Header";
import Engagement from "../components/Engagement";
import Footer from "../components/Footer";
import BodyAccueil from "../components/BodyAccueil";

function Accueil() {
  return (
    <>
      <Header />
      <Engagement />
      <BodyAccueil />
      <Footer />
    </>
  );
}

export default Accueil;
