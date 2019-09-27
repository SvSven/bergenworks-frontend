import Link from "next/link";

const PageMenuItem = props => {
  return (
    <li>
      <Link href="/[page]" as={`/${props.slug}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  );
};

export default PageMenuItem;
