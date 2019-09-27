import Link from "next/link";

const MainMenuItem = props => {
  return (
    <li>
      {props.is_custom_link ? (
        <a
          href={props.custom_link_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.title}
        </a>
      ) : (
        <Link href={props.slug}>
          <a>{props.title}</a>
        </Link>
      )}
    </li>
  );
};

export default MainMenuItem;
