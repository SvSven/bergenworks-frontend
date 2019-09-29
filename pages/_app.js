import React from "react";
import App from "next/app";

import withReduxStore from "../utils/with-redux-store";
import { Provider } from "react-redux";

import Layout from "../layouts/main";

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
