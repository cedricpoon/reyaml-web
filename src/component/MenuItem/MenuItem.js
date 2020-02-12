import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from  './MenuItem.module.css';

class MenuItem extends React.Component {
  render() {
    return (
			<div
				title={this.props.tooltip}
				className={classNames([
					styles.menuItem,
					this.props.button && styles.button,
					this.props.strong && styles.strong
				])}
			>
        {this.props.children}
      </div>
    )
  }
}

MenuItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  button: PropTypes.bool,
	strong: PropTypes.bool,
	tooltip: PropTypes.string
};

MenuItem.defaultProps = {};

export default MenuItem;