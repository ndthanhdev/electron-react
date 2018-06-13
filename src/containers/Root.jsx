import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Routes from '../routes';

export default class Root extends React.Component {
  render() {
    console.log(ConnectedRouter);

    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }


}

Root.propTypes = {
  store: PropTypes.any.isRequired,
  history: PropTypes.any.isRequired,
};

