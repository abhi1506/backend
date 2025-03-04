// Create a new file: FooterWrapper.jsx
import { useLocation } from "react-router-dom";
import FooterComponent from "./FooterComponents";
// import FooterComponent from "./pages/footer/FooterComponents";

const routesWithoutFooter = ["/contact"];

const FooterWrapper = () => {
  const location = useLocation();
  const shouldShowFooter = !routesWithoutFooter.includes(location.pathname);

  return shouldShowFooter ? <FooterComponent /> : null;
};

export default FooterWrapper;
