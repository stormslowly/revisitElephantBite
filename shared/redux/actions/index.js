/* globals store*/
import * as ActionTypes from '../constants/index'
import fetch from 'isomorphic-fetch'


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


export function addTodoToProject(project, task) {

  project.todos = [{task, done: false}, ...project.todos]
  project.tasks = project.todos.length
  project.done = project.todos.filter((t)=>t.done).length

  var newProject = Object.assign({}, project)

  return {
    type: ActionTypes.SET_CURRENT_PROJECT,
    project: newProject
  }
}

export function createProject(name) {
  var project = {
    name: name,
    tasks: 0,
    done: 0,
    todos: []
  }

  var projects = store.get('projects')
  projects.unshift(project)
  store.set('projects', projects)
  return loadProjects()
}

export function removeProject(projectIndex){
  var projects = store.get('projects')
  projects.splice(projectIndex,1)
  store.set('projects', projects)
  return loadProjects()
}