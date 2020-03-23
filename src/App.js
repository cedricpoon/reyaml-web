import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider as RdxProvider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import rootReducer from './reducers'
import i18n from './i18n';
import { AppFrame } from 'hoc';
import { Spinner } from 'component';

const isDev = process.env.NODE_ENV === 'development';

const composeEnhancers = (isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const pStore = persistStore(store);

toast.configure()

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Suspense fallback={<Spinner />}>
        <RdxProvider store={store}>
          <PersistGate persistor={pStore}>
            <I18nextProvider i18n={i18n}>
              <AppFrame />
            </I18nextProvider>
          </PersistGate>
        </RdxProvider>
      </React.Suspense>
    )
  }
}

export const persistor = pStore;

export default App;