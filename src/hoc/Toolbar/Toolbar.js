import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { IoIosSettings, IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import { connect } from 'react-redux'

import { lint } from 'actions/enum';
import { MenuItem, Icon } from 'component';
import * as SubMenus from './SubMenus';
import styles from './Toolbar.module.css';

class Toolbar extends React.Component {
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
					<MenuItem button tooltip={t('toolbar-settings')}>
						<Icon><IoIosSettings /></Icon>
					</MenuItem>
				</section>
			</nav>
		);
	}
}

const mapStateToProps = (state, _ownProps) => ({
  lint: state.lint === lint.OK
})

Toolbar.propTypes = {
	t: PropTypes.func.isRequired,
	lint: PropTypes.bool
};

Toolbar.defaultProps = {
	lint: true
};

export default withTranslation(null, { withRef: true })(connect(mapStateToProps, null)(Toolbar));