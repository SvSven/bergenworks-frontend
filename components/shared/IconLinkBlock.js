import NavLink from "../navigation/NavLink";

import "./icon-link-block.scss";

const IconLinkBlock = props => {
  return (
    <NavLink {...props.link} className="icon-link-block">
      <img src={props.icon} />
      <span>{props.title}</span>
    </NavLink>
  );
};

export default IconLinkBlock;
