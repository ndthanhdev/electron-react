import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Counter extends Component {

  render() {
    const {
            increment,
            incrementIfOdd,
            incrementAsync,
            decrement,
            counter,
        } = this.props;
    return (
      <div>
        <div className="backButton" data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div data-tid="counter">
          {counter}
        </div>
        <div className="btnGroup">
          <button className="btn" onClick={increment} data-tclass="btn">
            <i className="fa fa-plus" />
          </button>
          <button className="btn" onClick={decrement} data-tclass="btn">
            <i className="fa fa-minus" />
          </button>
          <button
            className="btn"
            onClick={incrementIfOdd}
            data-tclass="btn"
          >
                        odd
          </button>
          <button
            className="btn"
            onClick={() => incrementAsync()}
            data-tclass="btn"
          >
                        async
          </button>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};
