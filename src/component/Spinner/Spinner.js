import React from 'react';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

class SpinLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shown: props.enabled };
  }

  show() {
    this.setState({ shown: true });
  }

  hide() {
    this.setState({ shown: false });
  }

  render() {
    return (
      <Spinner
        className={classNames([
          'spinner',
          !this.state.shown && 'hidden'
        ])}
        name="cube-grid"
        fadeIn="none"
      />
    )
  }
}

SpinLoader.propTypes = {
  enabled: PropTypes.bool
};

SpinLoader.defaultProps = {
  enabled: true
}

export default SpinLoader;