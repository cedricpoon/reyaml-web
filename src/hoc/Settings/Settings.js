import React from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { persistor } from 'App';

import styles from './Settings.module.css';
import { updateDiagramSettings, updateEditorSettings } from 'actions';
import { Button, Link } from 'component';

const ReyamlCoreLink = () => {
  const { t } = useTranslation();
  return <Link text={t('settings-rc')} href={t('url-rc-github')} />;
};

const AceEditorLink = () => {
  const { t } = useTranslation();
  return <Link text={t('settings-ace')} href={t('url-ace-github')} />;
};

class Settings extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <h1>{this.props.t('settings-diagram-settings')}</h1>
        <section>
          <h2>renderHeight</h2>
          <article>Determine vertical rendering distance from selected line in <ReyamlCoreLink />. It will be presented as parameter <code>level</code> in <code>Rjson.truncate()</code>. Set 0 to disable.</article>
          <input type="number" 
            value={ this.props.renderHeight } 
            onChange={e => { 
              this.props.updateDiagramSettings({ renderHeight: parseInt(e.target.value) }) 
            }}
          />
        </section>
        <section>
          <h2>renderWidth</h2>
          <article>Determine horizontal rendering size from selected line in <ReyamlCoreLink />. It will be presented as parameter <code>siblingSize</code> in <code>Rjson.truncate()</code>. Set 0 to disable.</article>
          <input type="number"
            value={ this.props.renderWidth } 
            onChange={e => { this.props.updateDiagramSettings({ renderWidth: parseInt(e.target.value) }) }}
          />
        </section>
        <section>
          <h2>maxStringSize</h2>
          <article>Maximum length of key and content in YAML keypair. Referred as <code>config.size.maxStringSize</code> in <ReyamlCoreLink />. Numerically exclusive.</article>
          <input type="number"
            value={ this.props.maxStringSize } 
            onChange={e => { this.props.updateDiagramSettings({ maxStringSize: parseInt(e.target.value) }) }}
          />
        </section>

        <h1>{this.props.t('settings-editor-settings')}</h1>
        <section>
          <h2>tabSize</h2>
          <article>Size for each tab inserted as spaces. Applied to both <ReyamlCoreLink /> and <AceEditorLink />.</article>
          <input type="number"
            value={ this.props.tabSize } 
            onChange={e => { this.props.updateEditorSettings({ tabSize: parseInt(e.target.value) }) }}
          />
        </section>

        <h1>{this.props.t('settings-global-settings')}</h1>
        <section>
          <h2>{this.props.t('settings-erase-ls')}</h2>
          <article>{this.props.t('settings-erase-ls-article')}</article>
          <Button 
            important 
            confirm={this.props.t('settings-erase-ls-confirm')}
            text={this.props.t('settings-erase-ls-btn')}
            onClick={async () => { await persistor.purge(); window.open(`/${process.env.REACT_APP_NAME}`, "_self"); }} 
          />
        </section>
      </div>
    );
  }
}

Settings.propTypes = {
  t: PropTypes.func.isRequired,
  renderHeight: PropTypes.number.isRequired,
  renderWidth: PropTypes.number.isRequired,
  updateDiagramSettings: PropTypes.func.isRequired,
  tabSize: PropTypes.number.isRequired,
  maxStringSize: PropTypes.number.isRequired,
  updateEditorSettings: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  renderHeight: state.settings.diagram.renderHeight,
  renderWidth: state.settings.diagram.renderWidth,
  maxStringSize: state.settings.diagram.maxStringSize,
  tabSize: state.settings.editor.tabSize
});

const mapDispatchToProps = dispatch => ({
  updateDiagramSettings: diagram => dispatch(updateDiagramSettings(diagram)),
  updateEditorSettings: editor => dispatch(updateEditorSettings(editor))
});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Settings));