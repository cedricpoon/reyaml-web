import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { IoIosSettings, IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';

import { MenuItem, Icon, DropdownMenu } from 'component';
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
					<MenuItem strong>{process.env.REACT_APP_NAME}</MenuItem>
					<MenuItem dropdown={
						<DropdownMenu>
							<MenuItem button>New YAML</MenuItem>
							<MenuItem button>Open YAML File…</MenuItem>
							<DropdownMenu.LineBreak />
							<MenuItem button>Save</MenuItem>
							<MenuItem button>Save As…</MenuItem>
							<DropdownMenu.LineBreak />
							<MenuItem button>Export Permalink</MenuItem>
							<MenuItem button>Export Diagram As…</MenuItem>
						</DropdownMenu>
					}>
						{t('toolbar-file')}
					</MenuItem>
					<MenuItem dropdown={
						<DropdownMenu>
							<MenuItem button>Undo</MenuItem>
							<MenuItem button>Redo</MenuItem>
							<DropdownMenu.LineBreak />
							<MenuItem button>Cut</MenuItem>
							<MenuItem button>Copy</MenuItem>
							<MenuItem button>Paste</MenuItem>
							<DropdownMenu.LineBreak />
							<MenuItem button>Find</MenuItem>
							<MenuItem button>Replace</MenuItem>
						</DropdownMenu>
					}>
						{t('toolbar-edit')}
					</MenuItem>
					<MenuItem dropdown={
						<DropdownMenu>
							<MenuItem button>Reset Sections</MenuItem>
							<DropdownMenu.LineBreak />
							<MenuItem button>Hide YAML Editor</MenuItem>
							<MenuItem button>Hide D3 Tree Diagram</MenuItem>
						</DropdownMenu>
					}>
						{t('toolbar-view')}
					</MenuItem>
					<MenuItem dropdown={
						<DropdownMenu>
							<MenuItem button>Report Issue</MenuItem>
							<MenuItem button>Visit Github Repository</MenuItem>
							<DropdownMenu.LineBreak />
							<MenuItem disabled>{`Version: ${process.env.REACT_APP_VERSION}`}</MenuItem>
							<MenuItem disabled>{`Author: ${process.env.REACT_APP_AUTHOR}`}</MenuItem>
						</DropdownMenu>
					}>
						{t('toolbar-help')}
					</MenuItem>
				</section>
				<section className={styles.right}>
					<MenuItem 
						tooltip={this.state.lint ? t('toolbar-lint-success') : t('toolbar-lint-failure')}
					>
						<Icon color={this.state.lint ? 'darkgreen' : 'crimson'}>
							{this.state.lint ? <IoIosCheckmarkCircle /> : <IoIosCloseCircle />}
						</Icon>
					</MenuItem>
					<MenuItem button tooltip={t('toolbar-settings')}>
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