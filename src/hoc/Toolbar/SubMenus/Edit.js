import React from 'react';
import { withTranslation } from 'react-i18next';
import { MenuItem, DropdownMenu } from 'component';
import PropTypes from 'prop-types';

class Edit extends React.Component {
  render() {
    const { t } = this.props;
    return  (
      <DropdownMenu>
        <MenuItem button>{t('toolbar-edit-undo')}</MenuItem>
        <MenuItem button>{t('toolbar-edit-redo')}</MenuItem>
        <DropdownMenu.LineBreak />
        <MenuItem button>{t('toolbar-edit-cut')}</MenuItem>
        <MenuItem button>{t('toolbar-edit-copy')}</MenuItem>
        <MenuItem button>{t('toolbar-edit-paste')}</MenuItem>
        <DropdownMenu.LineBreak />
        <MenuItem button>{t('toolbar-edit-find')}</MenuItem>
        <MenuItem button>{t('toolbar-edit-replace')}</MenuItem>
      </DropdownMenu>
    );
  }
}

Edit.propTypes = {
  t: PropTypes.func.isRequired
};

Edit.defaultProps = {};

export default withTranslation()(Edit);