import React from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import 'react-reflex/styles.css';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { setAppStatus, compileD3Object, setYaml, updateCursor, updateWorkbench } from 'actions';
import { appStatus } from 'actions/enum'
import { D3Tree, TextEditor } from 'component';
import styles from './Workbench.module.css';

class Workbench extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultD3Object: { 
				name: `${process.env.REACT_APP_NAME}-v${process.env.REACT_APP_VERSION}`,
				attributes: { "": props.t('tree-placeholder') }
			},
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
    if (this.AceEditor) {
      const anchor = this.AceEditor.editor.selection.getSelectionAnchor();
      const cursor = {
        row: this.props.row,
        column: this.props.resetSelectionRange ? 0 : this.AceEditor.editor.selection.getCursor().column
      };
      this.AceEditor.editor.selection.setSelectionRange({
        start: this.props.resetSelectionRange ? cursor : anchor,
        end: cursor
      })
      if (this.props.resetSelectionRange) {
        this.AceEditor.editor.resize(true);
        this.AceEditor.editor.scrollToLine(this.props.row, true, false);
      }
    }
    if (this.state.shouldRenderD3Object && !this.state.updateLock)
      setTimeout(() => { this.renderD3Object() })
  }

  onChange = newValue => {
    if (this.AceEditor) {
      const { row } = this.AceEditor.editor.selection.getCursor();
      this.props.startLoading();
      this.props.updateYaml(newValue);
      this.props.updateRow(row);
      this.setState({ shouldRenderD3Object: true })
    }
  }

  onCursorChange = () => {
    if (this.AceEditor) {
      const { row } = this.AceEditor.editor.selection.getCursor();
      if (row !== this.state.row) {
        this.props.startLoading();
        this.props.updateRow(row);
        this.setState({ shouldRenderD3Object: true });
      }
    }
  }

  renderD3Object = async () => {
    try {
      await this.props.compileD3Object({ yaml: this.props.yaml, row: this.props.row });
    } catch (error) {
      // compilation error handled and shown in toolbar
    }
    this.setState({ shouldRenderD3Object: false });
    this.props.completeLoading();
  }

  render() {
    return (
      <div className={styles.container} ref={ref => (this.Container = ref)}>
        <ReflexContainer orientation="vertical">
          {this.props.panelFlex.d3Tree > 0 && (
            <ReflexElement flex={this.props.panelFlex.d3Tree}
              onStopResize={({ component }) => { this.props.updatePanelFlex({ d3Tree: component.props.flex }) }}
            >
              <D3Tree
                containerRect={this.state.containerRect}
                dataObject={this.props.d3Object || this.state.defaultD3Object}
              />
            </ReflexElement>
          )}
          {!Object.values(this.props.panelFlex).some(flex => flex === 0) && (
            <ReflexSplitter className={styles.seperator}/>
          )}
          {this.props.panelFlex.textEditor > 0 && (
            <ReflexElement flex={this.props.panelFlex.textEditor}
              onStopResize={({ component }) => { this.props.updatePanelFlex({ textEditor: component.props.flex }) }}
            >
              <TextEditor
                text={this.props.yaml}
                aceEditorProps={{
                  onChange: this.onChange,
                  onCursorChange: this.onCursorChange,
                  ref: r => { this.AceEditor = r }
                }}
              />
            </ReflexElement>
          )}
        </ReflexContainer>
      </div>
    );
  }
}

Workbench.propTypes = {
  t: PropTypes.func.isRequired,
  startLoading: PropTypes.func.isRequired,
  completeLoading: PropTypes.func.isRequired,
  compileD3Object: PropTypes.func.isRequired,
  updateYaml: PropTypes.func.isRequired,
  updateRow: PropTypes.func.isRequired,
  d3Object: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  yaml: PropTypes.string,
  row: PropTypes.number,
  resetSelectionRange: PropTypes.bool,
  panelFlex: PropTypes.object.isRequired,
  updatePanelFlex: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  updateLock: state.appStatus === appStatus.INIT_LOADING,
  d3Object: state.context.d3Object,
  yaml: state.context.yaml,
  row: state.cursor.index,
  resetSelectionRange: state.cursor.goto,
  panelFlex: state.workBench
})

const mapDispatchToProps = (dispatch, _ownProps) => ({
  startLoading: () => dispatch(setAppStatus(appStatus.INIT_LOADING)),
  completeLoading: () => dispatch(setAppStatus(appStatus.NORMAL)),
  compileD3Object: args => dispatch(compileD3Object(args)),
  updateYaml: yaml => dispatch(setYaml(yaml)),
  updateRow: row => dispatch(updateCursor({ index: row })),
  updatePanelFlex: workBench => dispatch(updateWorkbench(workBench))
})

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Workbench));