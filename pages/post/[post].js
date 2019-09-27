import Axios from "axios";
import Api from "../../utils/api";

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

  const response = await Axios.get(`${Api.posts}?slug=${post}`, {
    proxy: {
      host: "localhost",
      port: 80
    }
  });

  return response.data[0];
};

export default Post;
