import NavLink from "./NavLink";

const MenuList = props => {
  return (
    <>
      {props.name ? <h3>{props.name}</h3> : null}
      <ul className={props.className || null}>
        {props.items.map(item => {
          return (
            <li key={item.id}>
              <NavLink {...item}>{item.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MenuList;
