import { Ryaml } from 'reyaml-core';
import reyamlCoreConfig from 'reyaml-core/config';
import { lint } from 'actions/enum';
import { defaultState } from 'reducers';

export const setAppStatus = status => ({ type: 'SET_APP_STATUS', status });

export const setLint = status => ({ type: 'SET_LINT', status });

export const setYaml = yaml => ({ type: 'SET_CONTEXT_YAML', yaml });

export const setD3Object = d3Object => ({ type: 'SET_CONTEXT_D3OBJECT', d3Object });

export const updateCursor = ({ index, goto }) => ({ type: 'UPDATE_CURSOR', index, goto: goto ? true : false });

export const didShownBanner = () => ({ type: 'COMPLETE_BANNER' });

export const updateVersion = version => ({ type: 'SET_VERSION', version });

export const updateWorkbench = workBench => ({ type: 'SET_WORKBENCH', workBench });

export const hideEditor = () => dispatch => { dispatch(updateWorkbench({ d3Tree: 1, textEditor: 0 })) }

export const hideD3Tree = () => dispatch => { dispatch(updateWorkbench({ d3Tree: 0, textEditor: 1 })) }

export const showSettings = () => dispatch => { dispatch(updateWorkbench({ settings: 1 })) }

export const hideSettings = () => dispatch => { dispatch(updateWorkbench({ settings: 0 })) }

export const resetWorkbench = () => ({ type: 'RESET_WORKBENCH' });

export const updateDiagramSettings = diagram => ({ type: 'SET_DIAGRAM_SETTINGS', diagram });

export const updateEditorSettings = editor => ({ type: 'SET_EDITOR_SETTINGS', editor });

export const resetContext = () => dispatch => new Promise(resolve => {
  dispatch({ type: 'RESET_CONTEXT' });
  dispatch(setLint(lint.OK));
  resolve();
})

export const updateContext = yaml => dispatch => new Promise(async resolve => {
  dispatch(setYaml(yaml));
  dispatch(updateCursor(defaultState.cursor));
  await dispatch(compileD3Object({ yaml, row: 0 }));
  resolve();
})

export const compileD3Object = ({ yaml, row }) => (dispatch, getState) => new Promise((resolve, reject) => {
  if (!Ryaml.isJunkLine({ line: yaml.split('\n')[row] })) {
    const lineNo = row - new Ryaml(yaml).countJunkLine({ lineNo: row });
    const { diagram, editor } = getState().settings;
    const { renderHeight, renderWidth, maxStringSize } = diagram;
    
    reyamlCoreConfig.size = { tabSize: editor.tabSize, maxStringSize };

    const o = new Ryaml(yaml, reyamlCoreConfig)
      .toRjson({ profile: 'd3Tree' })
      .markLine({ lineNo })
      .truncate({ 
        lineNo, 
        ...(renderHeight > 0 ? { level: renderHeight } : null),
        ...(renderWidth > 0 ? { siblingSize: renderWidth } : null),
      })
      .toD3({ profile: 'd3Tree' });

    dispatch(setLint(Array.isArray(o) && o.length === 1 ? lint.OK : lint.ERROR));

    if (Array.isArray(o) && o.length === 1)
      dispatch(setD3Object(o));

    resolve();
  }
  reject();
});