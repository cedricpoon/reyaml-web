import React from 'react';
import { withTranslation } from 'react-i18next';
import { MenuItem, DropdownMenu } from 'component';
import PropTypes from 'prop-types';

class Help extends React.Component {
  render() {
    const { t } = this.props;
    return  (
      <DropdownMenu>
        <MenuItem button>{t('toolbar-help-report')}</MenuItem>
        <MenuItem button>{t('toolbar-help-github')}</MenuItem>
        <DropdownMenu.LineBreak />
        <MenuItem disabled>{`Version: ${process.env.REACT_APP_VERSION}`}</MenuItem>
        <MenuItem disabled>{`Author: ${process.env.REACT_APP_AUTHOR}`}</MenuItem>
      </DropdownMenu>
    );
  }
}

Help.propTypes = {
  t: PropTypes.func.isRequired
};

Help.defaultProps = {};

export default withTranslation()(Help);