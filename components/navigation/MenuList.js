import MenuLink from "./MenuLink";

const MenuList = props => {
  return (
    <>
      {props.name ? <h3>{props.name}</h3> : null}
      <ul className={props.className || null}>
        {props.items.map(item => {
          return (
            <li key={item.id}>
              <MenuLink {...item} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MenuList;
