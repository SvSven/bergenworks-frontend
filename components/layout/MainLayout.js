import { useSelector } from "react-redux";

import HeadMeta from "./HeadMeta";
import MainMenu from "../navigation/MainMenu";

const MainLayout = props => {
  const menus = useSelector(state => state.menus);
  return (
    <>
      <HeadMeta />
      <MainMenu items={menus["main-menu"]} />
      <>{props.children}</>
    </>
  );
};

export default MainLayout;
