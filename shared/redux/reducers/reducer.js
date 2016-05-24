import {combineReducers} from 'redux'
import * as ActionTypes from '../constants/index'


function numberReducer(number = 0, action) {
  switch (action.type) {
    case ActionTypes.ADD_NUMBER:
      return number + action.amount
    case ActionTypes.SET_NUMBER:
      return action.number
  }
  return number
}

function projectReducer(projects = [], action) {
  switch (action.type) {
    case  ActionTypes.ADD_PROJECT:
      return [...projects, action.project]
    case  ActionTypes.SET_PROJECTS:
      return action.projects
  }
  return projects
}

function currentProjectReducer(project=null,action){
  if(action.type===ActionTypes.SET_CURRENT_PROJECT){
    return action.project
  }
  return project
}

const reducers = {
  projects: projectReducer,
  currentProject:currentProjectReducer
}
const combinedReducer = combineReducers(reducers)

export default combinedReducer
