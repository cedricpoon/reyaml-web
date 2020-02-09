import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from 'i18n';
import { Workbench } from 'hoc';

class App extends React.Component {
  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<div></div>}>
          <Workbench />
        </Suspense>
      </I18nextProvider>
    )
  }
}

export default App;