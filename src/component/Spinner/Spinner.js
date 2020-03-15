import React from 'react';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Spinner.module.css';

class SpinLoader extends React.Component {
  componentDidUpdate() {
    if (this.props.updated)
      this.props.updated();
  }

  render() {
    return (
      <Spinner
        className={classNames([ styles.spinner, !this.props.enabled && styles.hidden ])}
        name="pulse"
        fadeIn="none"
      />
    )
  }
}

SpinLoader.propTypes = {
  enabled: PropTypes.bool,
  updated: PropTypes.func
};

SpinLoader.defaultProps = {
  enabled: true
}

export default SpinLoader;