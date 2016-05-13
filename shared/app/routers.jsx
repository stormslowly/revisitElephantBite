import React from 'react'
import {Route, IndexRoute} from 'react-router';

import App from '../containers/app'

import Dashboard from '../components/Dashboard'
import ProjectDetail  from  '../components/ProjectDetail'

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Dashboard} />
    <Route path="/project/:projectId" component={ProjectDetail} />
  </Route>
);

export default routes
