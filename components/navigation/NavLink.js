import Link from "next/link";

const MenuLink = props => {
  let attributes = {};

  switch (props.type) {
    case "page":
      if (props.is_frontpage) {
        attributes = { href: "/", as: null };
      } else {
        attributes = { href: "/[page]", as: `/${props.slug}` };
      }
      break;
    case "post":
      attributes = { href: "/post/[post]", as: `/post/${props.slug}` };
      break;
    default:
      attributes = { href: props.slug, as: null };
  }

  return props.type == "custom" ? (
    <a href={props.custom_link_url} target="_blank" rel="noopener noreferrer">
      {props.title}
    </a>
  ) : (
    <Link {...attributes}>
      <a className={props.className}>{props.children}</a>
    </Link>
  );
};

export default MenuLink;
