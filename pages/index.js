import React from "react";
import API from "../utils/api";

const Home = props => {
  return (
    <div>
      <h1>{props.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.content.rendered }}></div>
    </div>
  );
};

Home.getInitialProps = async function() {
  return await API.getFrontpage();
};

export default Home;
