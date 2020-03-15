import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider as RdxProvider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers'
import i18n from './i18n';
import { AppFrame } from 'hoc';
import { Spinner } from 'component';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <RdxProvider store={store}>
        <I18nextProvider i18n={i18n}>
          <React.Suspense fallback={<Spinner />}>
            <AppFrame loader={this.state.loader} />
          </React.Suspense>
        </I18nextProvider>
      </RdxProvider>
    )
  }
}

export default App;