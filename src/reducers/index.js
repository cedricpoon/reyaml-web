import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appStatus from './appStatus'
import lint from './lint'
import context from './context'
import cursor from './cursor'
import banner from './banner';
import workBench from './workBench';
import version from './version';
import * as enums from 'actions/enum';

export const defaultState = {
  appStatus: enums.appStatus.NORMAL,
  version: process.env.REACT_APP_VERSION,
  context: { d3Object: null, yaml: '' },
  cursor: { index: 0, goto: true },
  lint: enums.lint.OK,
  banner: true,
  workBench: { d3Tree: .5, textEditor: .5 }
};

const persistConfig = {
  root: { key: 'root', storage, blacklist: ['cursor'] },
  cursor: { key: 'cursor', storage, blacklist: ['goto'] }
}

const rootReducer = combineReducers({
  cursor: persistReducer(persistConfig.cursor, cursor),
  appStatus,
  lint,
  context,
  banner,
  workBench,
  version
});

export default persistReducer(persistConfig.root, rootReducer);