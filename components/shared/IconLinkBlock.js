import MenuLink from "../navigation/MenuLink";

const IconLinkBlock = props => {
  return (
    <MenuLink hoc={true} {...props.link} className="icon-link-block">
      <img src={props.icon} />
      <span>{props.title}</span>
    </MenuLink>
  );
};

export default IconLinkBlock;
