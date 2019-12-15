import NavLink from "../navigation/NavLink";

import "./icon-link-block.scss";

const IconLinkBlock = props => {
  const { link, icon, title } = props;

  return (
    <NavLink {...link} className="icon-link-block">
      <img src={icon} />
      <span>{title}</span>
    </NavLink>
  );
};

export default IconLinkBlock;
