import React from "react";
import {Provider} from "react-redux";
import App from "next/app";

// store
import withRedux from '../lib/with-redux-store';

class MyApp extends App {
    render() {
        const { Component, pageProps, reduxStore } = this.props
        return (
            <Provider store={reduxStore}>
                <Component {...pageProps} />
            </Provider>
        );
    }

}

export default withRedux(MyApp);