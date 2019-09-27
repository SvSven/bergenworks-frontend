const MainMenu = props => {
  return (
    <ul>
      {props.items.map(item => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
};

export default MainMenu;
