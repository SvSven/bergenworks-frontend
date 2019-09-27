import React from "react";
import App from "next/app";

import Axios from "axios";
import Api from "../utils/api";
import Layout from "../layouts/main";

class MyApp extends App {
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext);

    const response = await Axios.get(Api.menus);
    const menus = response.data;

    return { ...appProps, menus };
  }

  render() {
    const { Component, pageProps, menus } = this.props;
    return (
      <Layout menus={menus}>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
