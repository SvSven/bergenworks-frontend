import React from "react";
import App from "next/app";

import withReduxStore from "../utils/with-redux-store";
import { Provider } from "react-redux";

import MainLayout from "../components/layout/MainLayout";

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
