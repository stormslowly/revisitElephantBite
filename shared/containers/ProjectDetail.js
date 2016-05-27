import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'

import ProjectDetail  from '../components/ProjectDetail'
import  {addProjectTodo,doneProjectTodo,deleteProjectTodo} from '../redux/actions'

export default connect(function (state) {
    var currentProject = state.currentProject
    return {
      project: currentProject,
      index:state.projectIndex
    }
  },
  function (dispatch) {
    return {
      submit: function (projectIndex,task) {
        dispatch(addProjectTodo(projectIndex, task))
      },
      doneTodo: function(projectIndex,taskIndex){
        dispatch(doneProjectTodo(projectIndex,taskIndex))
      },
      deleteTodo: function(projectIndex,taskIndex){
        dispatch(deleteProjectTodo(projectIndex,taskIndex))
      }
    }
  }
)(ProjectDetail)