import Meta from "../components/html-head/meta";
import MainMenu from "../components/navigation/MainMenu";

const MainLayout = props => {
  return (
    <>
      <Meta />
      <MainMenu items={props.menus["main-menu"]} />
      <>{props.children}</>
    </>
  );
};

export default MainLayout;
