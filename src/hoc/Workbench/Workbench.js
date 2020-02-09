import React from 'react';
import './styles.css';

import { Ryaml } from 'reyaml-core';
import AceEditor from 'react-ace';
import Tree from 'react-d3-tree';
import 'brace/mode/yaml';
import 'brace/theme/chrome';
import 'react-reflex/styles.css';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import { withTranslation } from 'react-i18next';

class Workbench extends React.Component {
  constructor(props) {
    super(props);
    this.state = { yamlText: '', yamlObject: { name: props.t('treePlaceholder') }, lineNo: 0 };
  }

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 4,
        y: dimensions.height / 2
      }
    });
    if (this.ace) {
      this.ace.editor.session.setNewLineMode('unix');
      this.ace.editor.session.setOptions({ tabSize: 2, useSoftTabs: true });
    }
  }

  _updateYaml = ({ newValue, lineNo }) => {
    const o = new Ryaml(newValue)
      .toRjson({ profile: 'd3Tree' })
      .markLine({ lineNo })
      .truncate({ lineNo, level: 2, siblingSize: 2 })
      .toD3({ profile: 'd3Tree' });
    this.setState({ yamlText: newValue, yamlObject: Array.isArray(o) && o.length === 1 ? o : this.state.yamlObject });
  }

  onChange = (newValue) => {
    const { row } = this.ace.editor.selection.getCursor();
    if (!Ryaml.isJunkLine({ line: newValue.split('\n')[row] }))
      this._updateYaml({ newValue, lineNo: row - new Ryaml(newValue).countJunkLine({ lineNo: row }) });
    else
      this._updateYaml({ newValue });
  }

  onCursorChange = (selection) => {
    const { row } = this.ace.editor.selection.getCursor();
    if (!Ryaml.isJunkLine({ line: this.state.yamlText.split('\n')[row] })) {
      const lineNo = row - new Ryaml(this.state.yamlText).countJunkLine({ lineNo: row });
      this._updateYaml({ newValue: this.state.yamlText, lineNo });
      this.setState({ lineNo });
    } else
      this._updateYaml({ newValue: this.state.yamlText, lineNo: this.state.lineNo });
  }

  render() {
    return (
      <div className="container" ref={tc => (this.treeContainer = tc)}>
        <ReflexContainer orientation="vertical">
          <ReflexElement className="left-pane">
            <Tree
              translate={this.state.translate}
              data={this.state.yamlObject}
              orientation='vertical'
              initialDepth={1}
              transitionDuration={0}
              zoom={.75}
              pathFunc='straight'
              collapsible={false}
              separation={{siblings: 1, nonSiblings: 1}}
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
              ref={c => { this.ace = c; }}
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

export default withTranslation()(Workbench);