import React from 'react';
import PropTypes from 'prop-types';

import { Toolbar, Workbench } from 'hoc';
import styles from './AppFrame.module.css';

class AppFrame extends React.Component {
	constructor(props) {
		super(props);
		this.state = { toolbar: null };
	}

  render() {
    return (
      <div className={styles.appFrame}>
				<Toolbar 
					ref={r => { if (!this.state.toolbar) this.setState({ toolbar: r }) }} 
				/>
				<Workbench
					preAwait={resolve => {
						this.props.loader.show(resolve);
					}}
					postAwait={resolve => {
						this.props.loader.hide(resolve);
					}}
					postLint={lint => {
						if (this.state.toolbar) this.state.toolbar.setLint(lint);
					}}
				/>
      </div>
    );
  }
}

AppFrame.propTypes = {
  loader: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object
  ])
};

AppFrame.defaultProps = {};

export default AppFrame;