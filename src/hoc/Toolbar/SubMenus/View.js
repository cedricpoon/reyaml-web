import React from 'react';
import { withTranslation } from 'react-i18next';
import { MenuItem, DropdownMenu } from 'component';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hideD3Tree, hideEditor, resetWorkbench } from 'actions';

class View extends React.Component {
  render() {
    const { t } = this.props;
    return  (
      <DropdownMenu>
        <MenuItem button onClick={this.props.resetWorkbench}>{t('toolbar-view-reset')}</MenuItem>
        <DropdownMenu.LineBreak />
        <MenuItem button onClick={this.props.hideEditor}>{t('toolbar-view-hide-yaml')}</MenuItem>
        <MenuItem button onClick={this.props.hideD3Tree}>{t('toolbar-view-hide-d3')}</MenuItem>
      </DropdownMenu>
    );
  }
}

View.propTypes = {
  t: PropTypes.func.isRequired,
  resetWorkbench: PropTypes.func.isRequired,
  hideD3Tree: PropTypes.func.isRequired,
  hideEditor: PropTypes.func.isRequired
};

View.defaultProps = {};

// const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideEditor: () => dispatch(hideEditor()),
  hideD3Tree: () => dispatch(hideD3Tree()),
  resetWorkbench: () => dispatch(resetWorkbench())
});

export default withTranslation()(connect(null, mapDispatchToProps)(View));