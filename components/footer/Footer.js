import { useSelector } from "react-redux";
import Logo from "../shared/Logo";
import ContactList from "../shared/ContactList";
import MenuList from "../navigation/MenuList";

import "./footer.scss";

const Footer = props => {
  const logo = useSelector(state => state.logo.footer);
  const menus = useSelector(state => state.menus);

  const footer_menus = [
    menus["footer-left"],
    menus["footer-center"],
    menus["footer-right"]
  ];

  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-contact">
          <Logo src={logo} className="footer-logo" />
          <ContactList />
        </div>
        <div className="footer-nav">
          {footer_menus.map(menu => {
            return menu ? (
              <div className="footer-nav-menu" key={menu["name"]}>
                <MenuList name={menu["name"]} items={menu["items"]} />
              </div>
            ) : null;
          })}
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
