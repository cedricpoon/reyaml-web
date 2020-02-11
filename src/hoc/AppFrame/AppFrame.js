import React from 'react';
import PropTypes from 'prop-types';

import { Toolbar, Workbench } from 'hoc';
import styles from './AppFrame.module.css';

class AppFrame extends React.Component {
  render() {
    return (
      <div className={styles.appFrame}>
        <Toolbar />
        <Workbench loader={this.props.loader} />
      </div>
    );
  }
}

AppFrame.propTypes = {
  loader: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object
  ])
};

AppFrame.defaultProps = {};

export default AppFrame;