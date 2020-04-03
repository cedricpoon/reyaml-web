import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next';

import { setAppStatus, didShownBanner, updateVersion } from 'actions';
import { appStatus } from 'actions/enum';
import { Spinner } from 'component';
import { Toolbar, Workbench } from 'hoc';
import toast from 'toast';
import styles from './AppFrame.module.css';

class AppFrame extends React.Component {
  componentDidMount() {
    const currentVersion = process.env.REACT_APP_VERSION;
    if (this.props.shouldShowBanner) {
      toast(this.props.t('alert-banner'), { persisted: true, noPrefix: true });
      this.props.didShownBanner();
    }
    if (this.props.savedVersion < currentVersion) {
      toast(`${this.props.t('alert-updated')} v${this.props.savedVersion} → v${currentVersion}!`, { persisted: true, noPrefix: true });
      this.props.updateVersion(currentVersion);
    }
  }

  render() {
    return (
      <div className={styles.appFrame}>
				<Toolbar/>
        <Workbench/>
        <Spinner
          enabled={
            this.props.appStatus === appStatus.INIT_LOADING || 
            this.props.appStatus === appStatus.LOADING
          }
          updated={() => {
            if (this.props.appStatus === appStatus.INIT_LOADING)
              this.props.spinnerDidUpdate();
          }}
        />
      </div>
    );
  }
}

AppFrame.propTypes = {
  t: PropTypes.func.isRequired,
  appStatus: PropTypes.oneOf(Object.values(appStatus)).isRequired,
  spinnerDidUpdate: PropTypes.func.isRequired,
  didShownBanner: PropTypes.func.isRequired,
  shouldShowBanner: PropTypes.bool.isRequired,
  updateVersion: PropTypes.func.isRequired,
  savedVersion: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => ({
  spinnerDidUpdate: () => dispatch(setAppStatus(appStatus.LOADING)),
  didShownBanner: () => dispatch(didShownBanner()),
  updateVersion: version => dispatch(updateVersion(version))
});

const mapStateToProps = state => ({
  appStatus: state.appStatus,
  shouldShowBanner: state.banner,
  savedVersion: state.version
});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(AppFrame));