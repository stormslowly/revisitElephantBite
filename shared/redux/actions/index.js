/* globals store*/
import * as ActionTypes from '../constants/index'
import fetch from 'isomorphic-fetch'

function getProjects() {
  return store.get('projects') || []
}

export function loadProjects() {
  var projects = getProjects()

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

export function setCurrentProjectIndex(index) {
  return {
    type: ActionTypes.SET_PROJECT_INDEX,
    index
  }
}

export function addProjectTodo(projectIndex, task) {
  var projects = getProjects()
  var project = projects[projectIndex]

  project.todos = [{task, done: false}, ...project.todos]
  project.tasks = project.todos.length
  project.done = project.todos.filter((t)=>t.done).length

  projects[projectIndex] = project
  store.set('projects', projects)

  return {
    type: ActionTypes.SET_CURRENT_PROJECT,
    project
  }
}

export function toggleProjectTodo(projectIndex, taskIndex) {
  var projects = getProjects()
  var project = projects[projectIndex]
  var todo = project.todos[taskIndex]

  todo.done = !todo.done
  project.done += 1
  var newTodo = Object.assign({}, todo)

  project.todos = [].concat(project.todos.slice(0, taskIndex),
    newTodo,
    project.todos.slice(taskIndex + 1))
  project.tasks = project.todos.length
  project.done = project.todos.filter((t)=>t.done).length

  store.set('projects', projects)
  return {
    type: ActionTypes.SET_CURRENT_PROJECT,
    project
  }

}

export function deleteProjectTodo(projectIndex, taskIndex) {
  var projects = getProjects()
  var project = projects[projectIndex]

  project.todos.splice(taskIndex, 1)
  project.tasks = project.todos.length
  project.done = project.todos.filter((t)=>t.done).length

  store.set('projects', projects)
  return {
    type: ActionTypes.SET_CURRENT_PROJECT,
    project
  }
}


export function createProject(name) {
  var project = {
    name: name,
    tasks: 0,
    done: 0,
    todos: []
  }

  var projects = getProjects()
  projects.unshift(project)
  store.set('projects', projects)
  return loadProjects()
}

export function removeProject(projectIndex) {
  var projects = getProjects()
  projects.splice(projectIndex, 1)
  store.set('projects', projects)
  return loadProjects()
}

export function shiftProject(from, to) {
  var projects = getProjects()
  shiftArray(projects,from,to)
  store.set('projects', projects)
  return loadProjects()
}

function shiftArray(arr, from, to) {
  function swap(from, to) {
    var movingItem = arr[from]
    var targetItem = arr[to]
    arr[to] = movingItem
    arr[from] = targetItem
  }
  var next
  if (from < to) {
    next = () => from + 1
  } else {
    next = ()=> from - 1
  }

  var steps = Math.abs(from - to)
  while (steps) {
    swap(from, next())
    from = next()
    steps -= 1
  }
}
