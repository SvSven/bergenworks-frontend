import React from "react";
import API from "../utils/api";

const Home = props => {
  return (
    <div>
      <h1>{props.title ? props.title.rendered : null}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: props.content ? props.content.rendered : null
        }}
      ></div>
    </div>
  );
};

Home.getInitialProps = async function() {
  return await API.getFrontpage();
};

export default Home;
