/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const render = () => {
  const App = require('./containers/App').default; // eslint-disable-line global-require
  ReactDOM.render(<AppContainer><App /></AppContainer>, document.getElementById('App'));
};

render();
if (module.hot) {
  module.hot.accept(render);
}
