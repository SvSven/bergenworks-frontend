import Axios from "axios";
import Api from "../utils/api";

const Page = props => {
  return (
    <div>
      <h1>{props.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.content.rendered }}></div>
    </div>
  );
};

Page.getInitialProps = async function(context) {
  const { page } = context.query;

  const response = await Axios.get(`${Api.pages}?slug=${page}`, {
    proxy: {
      host: "localhost",
      port: 80
    }
  });

  return response.data[0];
};

export default Page;
