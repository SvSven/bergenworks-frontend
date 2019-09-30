import { useSelector } from "react-redux";

import HeadMeta from "./HeadMeta";
import MainMenu from "../navigation/MainMenu";
import Footer from "../footer/Footer";

const MainLayout = props => {
  const menus = useSelector(state => state.menus);
  return (
    <>
      <HeadMeta />
      <MainMenu items={menus["main-menu"]} />
      <main className="main-content">{props.children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
