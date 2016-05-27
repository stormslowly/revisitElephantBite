import React from 'react'
import {Route, IndexRoute} from 'react-router';
import App from '../containers/app'
import Dashboard from '../containers/Dashboard'
import ProjectDetail  from  '../containers/ProjectDetail'

import ProjectForm from '../containers/ProjectForm'

import store from '../redux/stores/createStore'

import  {loadProjects, setCurrentProject, setCurrentProjectIndex}  from '../redux/actions'

function enterDashboard() {
  store.dispatch(loadProjects())
}

function enterProject(routeState, replace) {
  let {projectId} = routeState.params
  store.dispatch(loadProjects())

  let {projects} = store.getState()
  let project = projects[projectId];
  if (project) {
    store.dispatch(setCurrentProject(project))
    store.dispatch(setCurrentProjectIndex(projectId))
  }
  else {
    replace('/')
  }
}

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} onEnter={enterDashboard}/>
    <Route path="/project/new" component={ProjectForm}/>
    <Route path="/project/:projectId" onEnter={enterProject} component={ProjectDetail}/>
  </Route>
);

export default routes
