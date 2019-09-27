import MainMenuItem from "./MainMenuItem";

const MainMenu = props => {
  return (
    <nav>
      {props.items ? (
        <ul>
          {props.items.map(item => {
            return <MainMenuItem key={item.id} title={item.title} />;
          })}
        </ul>
      ) : null}
    </nav>
  );
};

export default MainMenu;
