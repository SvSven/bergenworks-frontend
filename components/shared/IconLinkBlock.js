import NavLink from "../navigation/NavLink";

const IconLinkBlock = props => {
  return (
    <NavLink hoc={true} {...props.link} className="icon-link-block">
      <img src={props.icon} />
      <span>{props.title}</span>
    </NavLink>
  );
};

export default IconLinkBlock;
