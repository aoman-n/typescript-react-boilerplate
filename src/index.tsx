import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { Provider } from 'react-redux';
import { rootReducer } from './modules';
import App from './components/App';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
