import React from 'react';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

class SpinLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shown: props.enabled, semaphore: null };
  }

  componentDidUpdate() {
    if (this.state.semaphore) {
      this.state.semaphore();
      this.setState({ semaphore: null });
    }
  }

  show(f) { this.setState({ shown: true, semaphore: f }) }

  hide(f) { this.setState({ shown: false, semaphore: f }) }

  render() {
    return (
      <Spinner
        className={classNames([ 'spinner', !this.state.shown && 'hidden' ])}
        name="pulse"
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