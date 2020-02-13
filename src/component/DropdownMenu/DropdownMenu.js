import React from 'react';
import PropTypes from 'prop-types';

import styles from './DropdownMenu.module.css';

function LineBreak(props) {
	return <div className={styles.lineBreak} />
}

class DropdownMenu extends React.Component {
  render() {
    return (
			<div className={styles.dropdownMenu}>
				{this.props.children}
			</div>
    );
  }
}

DropdownMenu.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element)
	]).isRequired
};

DropdownMenu.defaultProps = {};

DropdownMenu.LineBreak = LineBreak;

export default DropdownMenu;