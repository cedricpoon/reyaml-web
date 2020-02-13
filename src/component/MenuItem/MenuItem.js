import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from  './MenuItem.module.css';

class MenuItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = { active: props.active };
	}

	componentDidMount() { document.addEventListener('click', this.onClick, false) }

	componentWillUnmount() { document.removeEventListener('click', this.onClick, false) }

	onClick = e => {
		if (!this.props.disabled) {
			if (this.props.dropdown)
				this.setState({  active: this.self.contains(e.target) });
			if (this.props.onClick) this.props.onClick(e);
		}
	}

  render() {
		const base = (
			<div
				ref={r => { this.self = r }}
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
			>
        {this.props.children}
      </div>
		);

    if (this.props.dropdown && !this.props.disabled) {
			return (
				<span className={styles.relative}>
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