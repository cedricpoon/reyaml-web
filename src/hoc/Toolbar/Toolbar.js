import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { IoIosSettings, IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import { connect } from 'react-redux'

import { lint } from 'actions/enum';
import { MenuItem, Icon } from 'component';
import * as SubMenus from './SubMenus';
import styles from './Toolbar.module.css';
import { showSettings, hideSettings } from 'actions';

class Toolbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { workBenchSnapshot: null }
	}

	render() {
		const { t } = this.props;
		return (
			<nav className={styles.toolbar}>
				<section className={styles.left}>
					<MenuItem strong>{process.env.REACT_APP_NAME}</MenuItem>
					<MenuItem dropdown={<SubMenus.File />}>
						{t('toolbar-file')}
					</MenuItem>
					<MenuItem dropdown={<SubMenus.Edit />}>
						{t('toolbar-edit')}
					</MenuItem>
					<MenuItem dropdown={<SubMenus.View />}>
						{t('toolbar-view')}
					</MenuItem>
					<MenuItem dropdown={<SubMenus.Help />}>
						{t('toolbar-help')}
					</MenuItem>
				</section>
				<section className={styles.right}>
					<MenuItem 
						tooltip={this.props.lint ? t('toolbar-lint-success') : t('toolbar-lint-failure')}
					>
						<Icon color={this.props.lint ? 'darkgreen' : 'crimson'}>
							{this.props.lint ? <IoIosCheckmarkCircle /> : <IoIosCloseCircle />}
						</Icon>
					</MenuItem>
					<MenuItem radio
						tooltip={t('toolbar-settings')} 
						active={this.props.activeSettings}
						onClick={this.props.activeSettings ? this.props.hideSettings : this.props.showSettings}
					>
						<Icon><IoIosSettings /></Icon>
					</MenuItem>
				</section>
			</nav>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	lint: state.lint === lint.OK,
	activeSettings: state.workBench.settings > 0
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	showSettings: () => dispatch(showSettings()),
	hideSettings: () => dispatch(hideSettings())
})

Toolbar.propTypes = {
	t: PropTypes.func.isRequired,
	lint: PropTypes.bool,
	activeSettings: PropTypes.bool,
	hideSettings: PropTypes.func.isRequired,
	showSettings: PropTypes.func.isRequired
};

Toolbar.defaultProps = {
	lint: true
};

export default withTranslation(null, { withRef: true })(connect(mapStateToProps, mapDispatchToProps)(Toolbar));