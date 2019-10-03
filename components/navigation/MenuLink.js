import Link from "next/link";

const MenuLink = props => {
  let as_attr = null;
  let href_attr = null;

  switch (props.type) {
    case "post":
      href_attr = "/post/[post]";
      as_attr = `/post/${props.slug}`;
    case "page":
      href_attr = "/[page]";
      as_attr = `/${props.slug}`;
    default:
      as_attr = null;
      href_attr = props.slug;
  }

  return props.type == "custom" ? (
    <a href={props.custom_link_url} target="_blank" rel="noopener noreferrer">
      {props.title}
    </a>
  ) : (
    <Link
      href={props.is_frontpage ? "/" : href_attr}
      as={props.is_frontpage ? null : as_attr}
    >
      <a>{props.title}</a>
    </Link>
  );
};

export default MenuLink;
