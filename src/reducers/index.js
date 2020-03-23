import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appStatus from './appStatus'
import lint from './lint'
import context from './context'
import cursor from './cursor'
import * as enums from 'actions/enum';

export const defaultState = {
  appStatus: enums.appStatus.NORMAL,
  context: { d3Object: null, yaml: '' },
  cursor: { index: 0, goto: true },
  lint: enums.lint.OK
};

const persistConfig = {
  root: { key: 'root', storage, blacklist: ['cursor'] },
  cursor: { key: 'cursor', storage, blacklist: ['goto'] }
}

const rootReducer = combineReducers({
  cursor: persistReducer(persistConfig.cursor, cursor),
  appStatus,
  lint,
  context
});

export default persistReducer(persistConfig.root, rootReducer);