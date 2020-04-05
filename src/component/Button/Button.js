import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Button.module.css';

class Button extends React.Component {
  _onClickWrapper = e => {
    if (this.props.onClick)
      if ((this.props.confirm && window.confirm(this.props.confirm)) || !this.props.confirm)
        this.props.onClick(e);
  }

  render() {
    return (
      <button 
        onClick={this._onClickWrapper}
        className={classNames([
          styles.root,
          this.props.important && styles.important
        ])}
      >
        {this.props.text}
      </button>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  important: PropTypes.bool,
  confirm: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {};

export default Button;