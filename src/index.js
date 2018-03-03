import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import WebPortalApp from './reducers';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(WebPortalApp, applyMiddleware(thunkMiddleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
