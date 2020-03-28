import React from 'react';
import { withTranslation } from 'react-i18next';
import { MenuItem, DropdownMenu } from 'component';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import toast from 'toast';
import { resetContext, updateContext } from 'actions';
import { persistor } from 'App';

const svgConfig = {
  container: [ "svg", "g" ],
  styles: {
    "rect": [ "fill", "stroke", "stroke-width" ],
    "path": [ "fill", "stroke", "stroke-width" ],
    "circle": [ "fill", "stroke", "stroke-width" ],
    "line": [ "stroke", "stroke-width" ],
    "text": [ "fill", "font-size", "text-anchor", "font" ],
    "polygon": [ "stroke", "fill" ]
  }
}

class File extends React.Component {
  _exportSvgStyle = (cloned, source) => {
    cloned.childNodes.forEach((clonedChild, i) => {
      if (svgConfig.container.indexOf(clonedChild.tagName) !== -1)
        this._exportSvgStyle(clonedChild, source.childNodes[i])

      else if (clonedChild.tagName in svgConfig.styles) {
        const styleDef = window.getComputedStyle(source.childNodes[i]);
        let styleDefStr = "";
        svgConfig.styles[clonedChild.tagName].forEach(style => {
          styleDefStr += `${style}:${styleDef.getPropertyValue(style)}; `
        });
        clonedChild.setAttribute("style", styleDefStr);
      }
    });
  }

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

  _saveYaml = e => {
    this.saveAs.download = window.prompt(this.props.t('alert-saveas-filename'), this.saveAs.download) || '';
    if (this.saveAs.download.length > 0) {
      this.saveAs.click();
      toast(`${this.props.t("alert-saveas-done")} "${this.saveAs.download}"`);
    }
  }

  _exportSvg = e => {
    try {
      const svg = document
        .getElementsByClassName('rd3t-tree-container rd3t-grabbable')[0]
        .children[0];
      const clonedSvg = svg.cloneNode(true);

      this._exportSvgStyle(clonedSvg, svg);
      this.export.href = `data:image/svg+xml,${encodeURIComponent(new XMLSerializer().serializeToString(clonedSvg))}`;

      this.export.download = window.prompt(this.props.t('alert-saveas-filename'), this.export.download) || '';
      if (this.export.download.length > 0) {
        this.export.click();
        toast(`${this.props.t("alert-saveas-done")} "${this.export.download}"`);
      }
    } catch (e) {
      toast(this.props.t('alert-export-err'));
      console.warn(e);
    }
  }

  render() {
    const { t } = this.props;
    return  (
      <DropdownMenu>
        <MenuItem button onClick={async () => {
          if (window.confirm(t('alert-new-confirm'))) {
            await this.props.resetContext();
            toast(t('alert-new-done'));
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
          toast(t('alert-save-done'));
        }}>
          {t('toolbar-file-save')}
        </MenuItem>
        <MenuItem button onClick={this._saveYaml}>
          {t('toolbar-file-saveas')}
        </MenuItem>
        <DropdownMenu.LineBreak />
        <MenuItem button onClick={this._exportSvg}>
          {t('toolbar-file-export-diagram')}
        </MenuItem>
        <section hidden>
          <input type='file' accept='.yaml,.yml' ref={r => this.fileOpen = r} onChange={this._openYaml} />
          <a
            ref={r => this.saveAs = r}
            href={`data:application/x-yaml;charset=utf-8,${encodeURIComponent(this.props.yaml)}`}
            download='download.yml'
          >-</a>
          <a
            ref={r => this.export = r}
            href='about:blank'
            download='yaml.svg'
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
