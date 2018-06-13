/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { configureStore, history } from './store/configureStore';

const store = configureStore();

const render = () => {
  const Root = require('./containers/Root').default; // eslint-disable-line global-require
  ReactDOM.render(<AppContainer><Root store={store} history={history} /></AppContainer>, document.getElementById('App'));
};

render();
if (module.hot) {
  module.hot.accept(render);
}
