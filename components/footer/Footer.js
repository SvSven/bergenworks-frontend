import "./footer.scss";

/**
 * Data used here can be fetched upon first app load and stored in redux, since all of
 * it is shared between different pages
 */

const Footer = props => {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-contact">
          <h4>Footer contact</h4>
          <p>Logo + contact information</p>
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
