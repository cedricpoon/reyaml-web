import React from 'react';
import { Ryaml } from 'reyaml-core';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import 'react-reflex/styles.css';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { setAppStatus, setLint } from 'actions';
import { appStatus, lint } from 'actions/enum'
import { D3Tree, TextEditor } from 'component';
import styles from './Workbench.module.css';

class Workbench extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      yaml: '', 
      d3Object: { 
				name: `${process.env.REACT_APP_NAME}-v${process.env.REACT_APP_VERSION}`,
				attributes: { "": props.t('tree-placeholder') }
			}, 
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
    if (this.state.shouldRenderD3Object && !this.state.updateLock)
      setTimeout(() => { this.renderD3Object() })
  }

  onChange = newValue => {
    const { row } = this.AceEditor.editor.selection.getCursor();
    this.props.startLoading();
    this.setState({ yaml: newValue, row, shouldRenderD3Object: true })
  }

  onCursorChange = () => {
    const { row } = this.AceEditor.editor.selection.getCursor();
    if (row !== this.state.row) {
      this.props.startLoading();
      this.setState({ row, shouldRenderD3Object: true });
    }
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

			this.props.linter(Array.isArray(o) && o.length === 1);

      this.setState({
        d3Object: Array.isArray(o) && o.length === 1 ? o : this.state.d3Object,
				shouldRenderD3Object: false
      });
    }
    
    this.props.completeLoading();
  }

  render() {
    return (
      <div className={styles.container} ref={ref => (this.Container = ref)}>
        <ReflexContainer orientation="vertical">
          <ReflexElement>
            <D3Tree
              containerRect={this.state.containerRect}
              dataObject={this.state.d3Object}
            />
          </ReflexElement>
          <ReflexSplitter className={styles.seperator}/>
          <ReflexElement>
            <TextEditor
              text={this.state.yaml}
              aceEditorProps={{
                onChange: this.onChange,
                onCursorChange: this.onCursorChange,
                ref: r => { this.AceEditor = r }
              }}
            />
          </ReflexElement>
        </ReflexContainer>
      </div>
    );
  }
}

Workbench.propTypes = {
  t: PropTypes.func.isRequired,
  startLoading: PropTypes.func.isRequired,
  completeLoading: PropTypes.func.isRequired,
  linter: PropTypes.func.isRequired,
  mutex: PropTypes.bool
};

const mapStateToProps = state => ({
  updateLock: state.appStatus === appStatus.INIT_LOADING
})

const mapDispatchToProps = (dispatch, _ownProps) => ({
  startLoading: () => dispatch(setAppStatus(appStatus.INIT_LOADING)),
  completeLoading: () => dispatch(setAppStatus(appStatus.NORMAL)),
  linter: isGood => dispatch(setLint(isGood ? lint.OK : lint.ERROR))
})

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Workbench));