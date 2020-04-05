import React from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { persistor } from 'App';

import styles from './Settings.module.css';
import { updateDiagramSettings } from 'actions';
import { Button } from 'component';

const ReyamlCoreLink = () => {
  const { t } = useTranslation();
  return (
    <a className={styles.link} href={t('url-rc-github')} rel='noreferrer noopener' target="_blank">
      {t('settings-rc')}
    </a>
  );
};

class Settings extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <h1>{this.props.t('settings-diagram-settings')}</h1>
        <section>
          <h2>renderHeight</h2>
          <article>Determine vertical rendering distance from selected line in <ReyamlCoreLink />. It will be presented as parameter <code>level</code> in <code>Rjson.truncate()</code>. Set -1 to disable.</article>
          <input type="number" 
            value={ this.props.renderHeight } 
            onChange={e => { 
              this.props.updateDiagramSettings({ renderHeight: parseInt(e.target.value) }) 
            }}
          />
        </section>
        <section>
          <h2>renderWidth</h2>
          <article>Determine horizontal rendering size from selected line in <ReyamlCoreLink />. It will be presented as parameter <code>siblingSize</code> in <code>Rjson.truncate()</code>. Set -1 to disable.</article>
          <input type="number"
            value={ this.props.renderWidth } 
            onChange={e => { this.props.updateDiagramSettings({ renderWidth: parseInt(e.target.value) }) }}
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
  updateDiagramSettings: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  renderHeight: state.settings.diagram.renderHeight,
  renderWidth: state.settings.diagram.renderWidth
});

const mapDispatchToProps = dispatch => ({
  updateDiagramSettings: diagram => dispatch(updateDiagramSettings(diagram))
});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Settings));