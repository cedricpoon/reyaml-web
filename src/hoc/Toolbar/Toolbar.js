import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { IoIosSettings, IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';

import { MenuItem, Icon } from 'component';
import styles from './Toolbar.module.css';

class Toolbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { lint: true };
	}	

	setLint(lint) { this.setState({ lint }) }

	render() {
		const { t } = this.props;

		return (
			<nav className={styles.toolbar}>
				<section className={styles.left}>
					<MenuItem strong>Reyaml-web</MenuItem>
					<MenuItem button>File</MenuItem>
					<MenuItem button>Edit</MenuItem>
					<MenuItem button>View</MenuItem>
					<MenuItem button>Help</MenuItem>
				</section>
				<section className={styles.right}>
					<MenuItem 
						tooltip={this.state.lint ? 'YAML transformed successfully' : 'Unsupported/malformed YAML'}
					>
						<Icon color={this.state.lint ? 'darkgreen' : 'crimson'}>
							{this.state.lint ? <IoIosCheckmarkCircle /> : <IoIosCloseCircle />}
						</Icon>
					</MenuItem>
					<MenuItem button tooltip='Settings'>
						<Icon><IoIosSettings /></Icon>
					</MenuItem>
				</section>
			</nav>
		);
	}
}

Toolbar.propTypes = {
	t: PropTypes.func.isRequired
};

Toolbar.defaultProps = {};

export default withTranslation(null, { withRef: true })(Toolbar);