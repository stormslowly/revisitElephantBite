import React from 'react'
import {Route, IndexRoute} from 'react-router';

import App from '../containers/app'
import Counter  from '../containers/counter'
import Hello from '../components/hello'

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Hello} />
    <Route path="/counter" component={Counter} />
  </Route>
);

export default routes
