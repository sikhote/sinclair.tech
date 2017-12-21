import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import WindowSizeListener from 'react-window-size-listener';
import { bps, colors } from '../lib/styles';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: typeof window !== 'undefined' ? window.innerWidth : bps.medium,
    };
  }
  render() {
    const { router } = this.props;
    const { width } = this.state;
    console.log(router, width, colors);
    return (
      <div className="root">
        <style jsx>
          {`
            .root {
              height: 100%;
            }
          `}
        </style>
        <WindowSizeListener
          onResize={({ windowWidth: width }) => this.setState({ width })}
        />
        <div>
          header
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  router: PropTypes.object.isRequired,
};

export default withRouter(Navigation);
