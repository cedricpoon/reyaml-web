import React from 'react';
import { withTranslation } from 'react-i18next';
import { MenuItem, DropdownMenu } from 'component';
import PropTypes from 'prop-types';

class View extends React.Component {
  render() {
    const { t } = this.props;
    return  (
      <DropdownMenu>
        <MenuItem button>{t('toolbar-view-reset')}</MenuItem>
        <DropdownMenu.LineBreak />
        <MenuItem button>{t('toolbar-view-hide-yaml')}</MenuItem>
        <MenuItem button>{t('toolbar-view-hide-d3')}</MenuItem>
      </DropdownMenu>
    );
  }
}

View.propTypes = {
  t: PropTypes.func.isRequired
};

View.defaultProps = {};

export default withTranslation()(View);