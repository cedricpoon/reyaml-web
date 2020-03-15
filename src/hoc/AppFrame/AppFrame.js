import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { setAppStatus } from 'actions';
import { appStatus } from 'actions/enum';
import { Spinner } from 'component';
import { Toolbar, Workbench } from 'hoc';
import styles from './AppFrame.module.css';

class AppFrame extends React.Component {
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
  appStatus: PropTypes.oneOf(Object.values(appStatus)).isRequired,
  spinnerDidUpdate: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  spinnerDidUpdate: () => dispatch(setAppStatus(appStatus.LOADING))
});

const mapStateToProps = state => ({
  appStatus: state.appStatus
});

export default connect(mapStateToProps, mapDispatchToProps)(AppFrame);