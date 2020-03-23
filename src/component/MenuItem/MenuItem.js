import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from  './MenuItem.module.css';

class MenuItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = { active: props.active };
	}

	componentDidMount() { 
		if (this.props.dropdown) document.addEventListener('click', this._onDropdownClick, false) 
	}

	componentWillUnmount() { 
		if (this.props.dropdown) document.removeEventListener('click', this._onDropdownClick, false) 
	}

	_onDropdownClick = e => {
		if (!this.props.disabled)
			if (this.props.dropdown) this.setState({  active: this.dropdown.contains(e.target) });
	}

  render() {
		const base = (
			<div
				title={this.props.tooltip}
				className={classNames([
					styles.menuItem,
					!this.props.disabled && [
						(this.props.button || this.props.dropdown) && styles.button,
						this.props.dropdown && this.state.active && styles.active,
					],
					this.props.strong && styles.strong,
					this.props.disabled && styles.disabled
				])}
				onClick={e => { if (this.props.onClick) this.props.onClick(e) }}
			>
        {this.props.children}
      </div>
		);

    if (this.props.dropdown && !this.props.disabled) {
			return (
				<span className={styles.relative} ref={r => { this.dropdown = r }} >
					{base}
					{this.state.active && (
						<div className={classNames([
							styles.dropdown,
							this.props.dropDirection === 'left' && styles.left,
							this.props.dropDirection === 'right' && styles.right,
						])}>
							{this.props.dropdown}
						</div>
					)}
				</span>
			);
		}
		return base;
  }
}

MenuItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
	button: PropTypes.bool,
	strong: PropTypes.bool,
	tooltip: PropTypes.string,
	dropdown: PropTypes.element,
	dropDirection: PropTypes.oneOf([ 'left', 'bottom', 'right' ]),
	active: PropTypes.bool,
	disabled: PropTypes.bool,
	onClick: PropTypes.func
};

MenuItem.defaultProps = {};

export default MenuItem;