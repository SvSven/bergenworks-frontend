import { useSelector } from "react-redux";
import Logo from "../shared/Logo";

import "./footer.scss";

const Footer = props => {
  const logo = useSelector(state => state.logo.footer);

  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-contact">
          <Logo src={logo} className="footer-logo" />
        </div>
        <div className="footer-nav">
          <h4>Footer navigation</h4>
          <p>3 different menus</p>
        </div>
        <div className="footer-partners">
          <h4>Footer partners</h4>
          <p>Partner logos with link</p>
        </div>
      </div>
      <div className="footer-copyright">&copy; 2017-2019 Bergen.Works</div>
    </footer>
  );
};

export default Footer;
