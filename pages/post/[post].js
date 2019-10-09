import API from "../../utils/api";

const Post = props => {
  return (
    <>
      {props.featured_image ? (
        <div
          className="page-hero"
          style={{ backgroundImage: `url(${props.featured_image})` }}
        ></div>
      ) : null}

      <div
        className={`page-content container ${
          props.featured_image ? "has-hero" : null
        }`}
      >
        <h1 className="page-title">
          {props.title ? props.title.rendered : null}
        </h1>
        <div
          dangerouslySetInnerHTML={{
            __html: props.content ? props.content.rendered : null
          }}
        ></div>
      </div>
    </>
  );
};

Post.getInitialProps = async function(context) {
  const { post } = context.query;
  const content = await API.getPost(post);

  return content;
};

export default Post;
