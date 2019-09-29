import API from "../../utils/api";

const Post = props => {
  return (
    <div>
      <h1>{props.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.content.rendered }}></div>
    </div>
  );
};

Post.getInitialProps = async function(context) {
  const { post } = context.query;
  const content = await API.getPost(post);

  return content[0];
};

export default Post;
