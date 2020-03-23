import { Ryaml } from 'reyaml-core';
import { lint } from 'actions/enum';
import { defaultState } from 'reducers';

export const setAppStatus = status => ({ type: 'SET_APP_STATUS', status });

export const setLint = status => ({ type: 'SET_LINT', status });

export const setYaml = yaml => ({ type: 'SET_CONTEXT_YAML', yaml });

export const setD3Object = d3Object => ({ type: 'SET_CONTEXT_D3OBJECT', d3Object });

export const updateCursor = ({ index, goto }) => ({ type: 'UPDATE_CURSOR', index, goto: goto ? true : false });

export const resetContext = () => dispatch => new Promise(resolve => {
  dispatch({ type: 'REVOKE_CONTEXT' });
  dispatch(setLint(lint.OK));
  resolve();
})

export const updateContext = yaml => dispatch => new Promise(async resolve => {
  dispatch(setYaml(yaml));
  dispatch(updateCursor(defaultState.cursor));
  await dispatch(compileD3Object({ yaml, row: 0 }));
  resolve();
})

export const compileD3Object = ({ yaml, row }) => dispatch => new Promise((resolve, reject) => {
  if (!Ryaml.isJunkLine({ line: yaml.split('\n')[row] })) {
    const lineNo = row - new Ryaml(yaml).countJunkLine({ lineNo: row });

    const o = new Ryaml(yaml)
      .toRjson({ profile: 'd3Tree' })
      .markLine({ lineNo })
      .truncate({ lineNo, level: 2, siblingSize: 2 })
      .toD3({ profile: 'd3Tree' });

    dispatch(setLint(Array.isArray(o) && o.length === 1 ? lint.OK : lint.ERROR));

    if (Array.isArray(o) && o.length === 1)
      dispatch(setD3Object(o));

    resolve();
  }
  reject();
});