import { useSelector } from "react-redux";

import Meta from "../components/html-head/meta";
import MainMenu from "../components/navigation/MainMenu";

const MainLayout = props => {
  const menus = useSelector(state => state.menus);
  return (
    <>
      <Meta />
      <MainMenu items={menus["main-menu"]} />
      <>{props.children}</>
    </>
  );
};

export default MainLayout;
