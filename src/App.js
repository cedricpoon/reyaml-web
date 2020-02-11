import React from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from 'i18n';
import { AppFrame } from 'hoc';
import { Spinner } from 'component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <React.Suspense fallback={<Spinner />}>
          <Spinner
            enabled={false}
            ref={ref => !this.state.loader && this.setState({ loader: ref })}
          />
          <AppFrame loader={this.state.loader} />
        </React.Suspense>
      </I18nextProvider>
    )
  }
}

export default App;