import MainMenuItem from "./MainMenuItem";

const MainMenu = props => {
  return (
    <nav>
      {props.items ? (
        <ul>
          {props.items.map(item => {
            return <MainMenuItem key={item.id} {...item} />;
          })}
        </ul>
      ) : null}
    </nav>
  );
};

export default MainMenu;
