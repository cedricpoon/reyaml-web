import React from 'react';
import { Ryaml } from 'reyaml-core';
import AceEditor from 'react-ace';
import 'brace/mode/yaml';
import 'brace/theme/chrome';
import 'react-reflex/styles.css';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { D3Tree } from 'component';
import './styles.css';

class Workbench extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      yaml: '', 
      d3Object: { name: props.t('treePlaceholder') }, 
      lineNo: 0,
      shouldRenderD3Object: false
    };
  }

  componentDidMount() {
    this.setState({ containerRect: this.Container.getBoundingClientRect() });
    if (this.AceEditor) {
      this.AceEditor.editor.session.setNewLineMode('unix');
      this.AceEditor.editor.session.setOptions({ tabSize: 2, useSoftTabs: true });
    }
  }

  componentDidUpdate() {
    if (this.state.shouldRenderD3Object)
      setTimeout(() => { this.renderD3Object() })
  }

  onChange = newValue => {
    const { row } = this.AceEditor.editor.selection.getCursor();
    this.props.loader.show(() => {
      this.setState({ yaml: newValue, row, shouldRenderD3Object: true });
    });
  }

  onCursorChange = () => {
    const { row } = this.AceEditor.editor.selection.getCursor();
    if (row !== this.state.row)
      this.props.loader.show(() => {
        this.setState({ row, shouldRenderD3Object: true });
      });
  }

  renderD3Object = () => {
    const { yaml, row } = this.state;

    if (!Ryaml.isJunkLine({ line: yaml.split('\n')[row] })) {
      const lineNo = row - new Ryaml(this.state.yaml).countJunkLine({ lineNo: row });

      const o = new Ryaml(yaml)
        .toRjson({ profile: 'd3Tree' })
        .markLine({ lineNo })
        .truncate({ lineNo, level: 2, siblingSize: 2 })
        .toD3({ profile: 'd3Tree' });

      this.setState({
        d3Object: Array.isArray(o) && o.length === 1 ? o : this.state.d3Object,
        shouldRenderD3Object: false
      });
    }

    this.props.loader.hide();
  }

  render() {
    return (
      <div className="container" ref={ref => (this.Container = ref)}>
        <ReflexContainer orientation="vertical">
          <ReflexElement className="left-pane">
            <D3Tree 
              containerRect={this.state.containerRect}
              dataObject={this.state.d3Object}
            />
          </ReflexElement>
          <ReflexSplitter className="seperator"/>
          <ReflexElement className="right-pane">
            <AceEditor
              mode="yaml"
              theme="chrome"
              onChange={this.onChange}
              onCursorChange={this.onCursorChange}
              value={this.state.yaml}
              ref={c => { this.AceEditor = c; }}
              editorProps={{$blockScrolling: true}}
              height='100%'
              width='100%'
            />
          </ReflexElement>
        </ReflexContainer>
      </div>
    );
  }
}

Workbench.propTypes = {
  t: PropTypes.func.isRequired,
  loader: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object
  ])
};

export default withTranslation()(Workbench);