import Footer from "../components/Footer";
import HeaderMobilié from "../components/HeaderMobilié"
import BeneficeMobilier from "../components/BeneficeMobilier";
import NavbarMobi from "../components/NavbarMobi";
import PrixPlan from "../components/Prixplan";
function Mobilier() {
  return (
    <>
    <NavbarMobi/>
      <HeaderMobilié/>
      <BeneficeMobilier />
      <PrixPlan/>
      <Footer />
    </>
  );
}
export default Mobilier;
