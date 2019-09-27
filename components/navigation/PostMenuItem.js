import Link from "next/link";

const PostMenuItem = props => {
  return (
    <li>
      <Link href="/post/[post]" as={`/post/${props.slug}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  );
};

export default PostMenuItem;
