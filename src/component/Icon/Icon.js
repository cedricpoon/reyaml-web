import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Icon.module.css';

class Icon extends React.Component {
  render() {
    return (
			<div
				style={{ color: this.props.color }}
				className={classNames([
					styles.icon,
					styles[this.props.size],
					this.props.color && styles.colorTrans
				])}
			>
        {this.props.children}
      </div>
    );
  }
}

Icon.propTypes = {
  children: PropTypes.element.isRequired,
	size: PropTypes.string,
	color: PropTypes.string,
};

Icon.defaultProps = {
  size: 'medium',
};

export default Icon;