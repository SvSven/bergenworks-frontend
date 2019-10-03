import { useSelector } from "react-redux";

import HeadMeta from "./HeadMeta";
import MainMenu from "../navigation/MainMenu";
import Footer from "../footer/Footer";

const MainLayout = props => {
  const menus = useSelector(state => state.menus);
  const navbarLogo = useSelector(state =>
    state.logo ? state.logo.navbar : null
  );

  return (
    <>
      <HeadMeta />
      <MainMenu
        items={menus["main-menu"] ? menus["main-menu"]["items"] : null}
        logo={navbarLogo}
      />
      <main className="main-content">{props.children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
