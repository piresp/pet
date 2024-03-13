import store from '@/redux/store/store';
import React from 'react';
import { Provider } from 'react-redux';
import "../app/globals.css";

const MyApp: React.FC<any> = ({ Component, pageProps }) => {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
