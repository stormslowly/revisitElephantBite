import React from 'react'
import {Route, IndexRoute} from 'react-router';

import App from '../containers/app'
import Counter  from '../containers/counter'
import Dashboard from '../components/Dashboard'

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Dashboard} />
    <Route path="/counter" component={Counter} />
  </Route>
);

export default routes
