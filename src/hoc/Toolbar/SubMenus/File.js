import React from 'react';
import { withTranslation } from 'react-i18next';
import { MenuItem, DropdownMenu } from 'component';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import toast from 'toast';
import { resetContext, updateContext } from 'actions';
import { persistor } from 'App';

class File extends React.Component {
  _openYaml = e => {
    if (this.fileOpen.files[0]) {
      const reader = new FileReader();
      reader.readAsText(this.fileOpen.files[0], "UTF-8");
      reader.onload = async e => {
        await this.props.updateContext(e.target.result);
        toast(`"${this.fileOpen.files[0].name}" ${this.props.t('alert-file-loaded')}`);
      }
      reader.onerror = e => {
        toast(`${this.props.t('alert-file-error')} "${this.fileOpen.files[0].name}"`);
      }
    }
  }

  render() {
    const { t } = this.props;
    return  (
      <DropdownMenu>
        <MenuItem button onClick={async () => {
          if (window.confirm(this.props.t('alert-new-confirm'))) {
            await this.props.resetContext();
            toast(this.props.t('alert-new-done'));
          }
        }}>
          {t('toolbar-file-new')}
        </MenuItem>
        <MenuItem button onClick={e => { this.fileOpen.click() }}>
          {t('toolbar-file-open')}
        </MenuItem>
        <DropdownMenu.LineBreak />
        <MenuItem button onClick={e => { 
          persistor.flush();
          toast(this.props.t('alert-save-done'));
        }}>
          {t('toolbar-file-save')}
        </MenuItem>
        <MenuItem button onClick={e => {
          this.saveAs.download = window.prompt(this.props.t('alert-saveas-filename'), this.saveAs.download) || '';
          if (this.saveAs.download.length > 0) {
            this.saveAs.click();
            toast(`${this.props.t("alert-saveas-done")} "${this.saveAs.download}"`);
          }
        }}>
          {t('toolbar-file-saveas')}
        </MenuItem>
        <DropdownMenu.LineBreak />
        <MenuItem button>{t('toolbar-file-export-link')}</MenuItem>
        <MenuItem button>{t('toolbar-file-export-diagram')}</MenuItem>
        <section hidden>
          <input type='file' accept='.yaml,.yml' ref={r => this.fileOpen = r} onChange={this._openYaml} />
          <a 
            ref={r => this.saveAs = r}
            href={`data:application/x-yaml;charset=utf-8,${encodeURIComponent(this.props.yaml)}`}
            download='download.yml'
          >-</a>
        </section>
      </DropdownMenu>
    );
  }
}

File.propTypes = {
  t: PropTypes.func.isRequired,
  resetContext: PropTypes.func.isRequired,
  updateContext: PropTypes.func.isRequired,
  yaml: PropTypes.string.isRequired
};

File.defaultProps = {};

const mapStateToProps = (state, ownProps) => ({
  yaml: state.context.yaml
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  resetContext: () => dispatch(resetContext()),
  updateContext: yaml => dispatch(updateContext(yaml))
});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(File));