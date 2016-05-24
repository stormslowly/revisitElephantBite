/* globals store*/
import * as ActionTypes from '../constants/index'
import fetch from 'isomorphic-fetch'


export function addProject(project) {


  return {}
}

export function loadProjects() {
  var projects = store.get('projects') || []

  return {
    type: ActionTypes.SET_PROJECTS,
    projects
  }
}

export function setCurrentProject(project) {
  project.todos = project.todos || []
  return {
    type: ActionTypes.SET_CURRENT_PROJECT,
    project
  }
}


export function addTodoToProject(project, task){

  project.todos = [{task,done:false},...project.todos]
  project.tasks = project.todos.length
  project.done = project.todos.filter((t)=>t.done).length

  var newProject = Object.assign({},project)

  return {
    type: ActionTypes.SET_CURRENT_PROJECT,
    project:newProject
  }
}