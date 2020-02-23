import App, { Container } from "next/app";
import store from "../store";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

class MyApp extends App {
  render() {
    const { store, Component, pageProps, ...props } = this.props;
    return (
      <Container>
        <Provider store={store}>
          {/* <PersistGate persistor={store.persistor} loading={null}> */}
            <Component {...pageProps} />
          {/* </PersistGate> */}
        </Provider>
      </Container>
    );
  }
}

export default withRedux(store)(MyApp);
