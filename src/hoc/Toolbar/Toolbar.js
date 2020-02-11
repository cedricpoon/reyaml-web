import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { MenuItem } from 'component';
import styles from './Toolbar.module.css';

class Toolbar extends React.Component {
  render() {
    return (
      <div className={styles.toolbar}>
        <MenuItem strong>Reyaml-web</MenuItem>
        <MenuItem button>File</MenuItem>
        <MenuItem button>Edit</MenuItem>
        <MenuItem button>Settings</MenuItem>
      </div>
    );
  }
}

Toolbar.propTypes = {
  t: PropTypes.func.isRequired,
};

Toolbar.defaultProps = {};

export default withTranslation()(Toolbar);