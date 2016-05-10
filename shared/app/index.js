import React, {Component, PropTypes} from 'react';
import {Route, IndexRoute} from 'react-router';
import DevTools from '../containers/DevTools/DevTools';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {configStore}from '../redux/stores/createStore';

import routes from './routers.jsx'

var initState = typeof window === 'undefined' ? {} : window.__INITIAL_STATE__

const store = configStore(initState);
const dest = document.getElementById('root');
const history = browserHistory;

render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>
  , dest);

if (process.env.NODE_ENV !== 'production') {
  window.React = React; // enable debugger
  window._store_ = store

  if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.'); // eslint-disable-line
  }
}

if (process.env.CLIENT && !window.devToolsExtension) {
  const devToolsDest = document.createElement('div');
  dest.parentNode.insertBefore(devToolsDest, dest.nextSibling);
  render(
    <Provider store={store} key="provider">
      <DevTools />
    </Provider>,
    devToolsDest
  );
}
