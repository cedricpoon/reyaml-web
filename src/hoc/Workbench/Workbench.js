import React from 'react';
import { Ryaml } from 'reyaml-core';
import AceEditor from 'react-ace';
import 'brace/mode/yaml';
import 'brace/theme/chrome';
import 'react-reflex/styles.css';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import './styles.css';

const D3Tree = React.lazy(() => import('component/D3Tree/D3Tree'));

class Workbench extends React.Component {
  constructor(props) {
    super(props);
    this.state = { yamlText: '', d3Object: { name: props.t('treePlaceholder') }, lineNo: 0, firstTime: true };
  }

  componentDidMount() {
    this.setState({ containerRect: this.Container.getBoundingClientRect() });
    if (this.AceEditor) {
      this.AceEditor.editor.session.setNewLineMode('unix');
      this.AceEditor.editor.session.setOptions({ tabSize: 2, useSoftTabs: true });
    }
  }

  componentDidUpdate() {
    this.setState({ firstTime: false });
    this._renderD3Object();
  }

  _renderD3Object = () => {
    const o = new Ryaml(this.state.yamlText)
      .toRjson({ profile: 'd3Tree' })
      .markLine({ lineNo: this.state.lineNo })
      .truncate({ lineNo: this.state.lineNo, level: 2, siblingSize: 2 })
      .toD3({ profile: 'd3Tree' });
    this.setState({ d3Object: Array.isArray(o) && o.length === 1 ? o : this.state.d3Object });
  }

  onChange = (newValue) => {
    const { row } = this.AceEditor.editor.selection.getCursor();
    this.setState({ yamlText: newValue });
    if (!Ryaml.isJunkLine({ line: newValue.split('\n')[row] }))
      this.setState({ lineNo: row - new Ryaml(newValue).countJunkLine({ lineNo: row }) });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.yamlText !== this.state.yamlText
      || JSON.stringify(nextState.d3Object) !== JSON.stringify(this.state.d3Object)
      || nextState.lineNo !== this.state.lineNo
      || this.state.firstTime
    ) {
      if (nextProps.loader) {
        nextProps.loader.show();
      }
      return true;
    }
    return false;
  }

  onCursorChange = (selection) => {
    const { row } = this.AceEditor.editor.selection.getCursor();
    if (!Ryaml.isJunkLine({ line: this.state.yamlText.split('\n')[row] })) {
      const lineNo = row - new Ryaml(this.state.yamlText).countJunkLine({ lineNo: row });
      this.setState({ lineNo });
    }
  }

  render() {
    return (
      <div className="container" ref={ref => (this.Container = ref)}>
        <ReflexContainer orientation="vertical">
          <ReflexElement className="left-pane">
            <D3Tree 
              containerRect={this.state.containerRect}
              dataObject={this.state.d3Object}
              loader={this.props.loader}
            />
          </ReflexElement>
          <ReflexSplitter className="seperator"/>
          <ReflexElement className="right-pane">
            <AceEditor
              mode="yaml"
              theme="chrome"
              onChange={this.onChange}
              onCursorChange={this.onCursorChange}
              value={this.state.yamlText}
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