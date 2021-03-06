import React from "react";
import App, { AppContext } from "next/app";
import { Store } from "redux";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";

import makeStore from "../redux/store";
import { RootState } from "../redux/rootReducer";

import Head from "../components/common/Head";
import Layout from "../components/common/Layout";

import "./styles/common.css";

class MyApp extends App<{ store: Store<RootState> }> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    const asPath = ctx.asPath;
    return { pageProps, asPath };
  }

  public render() {
    const { Component, pageProps, store, asPath } = (this as any).props;

    return (
      <Provider store={store}>
        <Head />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);
