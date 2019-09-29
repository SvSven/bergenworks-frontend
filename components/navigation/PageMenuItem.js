import Link from "next/link";

const PageMenuItem = props => {
  const slug = props.is_frontpage ? "/" : props.slug;

  let linkAttributes = {
    href: "",
    as: null
  };

  if (props.is_frontpage) {
    linkAttributes.href = "/";
  } else {
    linkAttributes.href = "/[page]";
    linkAttributes.as = `/${slug}`;
  }

  return (
    <li>
      <Link {...linkAttributes}>
        <a>{props.title}</a>
      </Link>
    </li>
  );
};

export default PageMenuItem;
