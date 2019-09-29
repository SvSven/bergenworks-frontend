import React from "react";
import { initializeStore } from "./redux-store";
import Axios from "axios";
import Api from "./api";
import { storeActions } from "./redux-store";

const isServer = typeof window === "undefined";
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
}

export default App => {
  return class AppWithRedux extends React.Component {
    static async getInitialProps({ Component, ctx }) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore();

      // Provide the store to getInitialProps of pages
      ctx.reduxStore = reduxStore;

      if (ctx.req) {
        const response = await Axios.get(Api.menus);
        ctx.reduxStore.dispatch(storeActions.setMenus(response.data));
      }

      const pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};

      return {
        pageProps: { ...pageProps },
        initialReduxState: reduxStore.getState()
      };
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};
