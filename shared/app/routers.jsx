import React from 'react'
import {Route, IndexRoute} from 'react-router';
import App from '../containers/app'
import Dashboard from '../containers/Dashboard'
import ProjectDetail  from  '../containers/ProjectDetail'
import store from '../redux/stores/createStore'

import  {loadProjects,setCurrentProject}  from '../redux/actions'

function enterDashboard(){
  store.dispatch(loadProjects())
}

function enterProject (routeState){
  let  {projectId} = routeState.params
  let {projects} = store.getState()
  store.dispatch(setCurrentProject(projects[projectId]))
}

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Dashboard} onEnter={enterDashboard}/>
    <Route path="/project/:projectId" onEnter={enterProject} component={ProjectDetail} />
  </Route>
);

export default routes
