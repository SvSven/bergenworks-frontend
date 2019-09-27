import React from "react";
import Axios from "axios";
import Api from "../utils/api";

const Home = props => {
  return (
    <div>
      <h1>{props.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.content.rendered }}></div>
    </div>
  );
};

Home.getInitialProps = async function() {
  const response = await Axios.get(Api.frontpage, {
    proxy: {
      host: "localhost",
      port: 80
    }
  });

  return response.data;
};

export default Home;
