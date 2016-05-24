import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'

import ProjectDetail  from '../components/ProjectDetail'
import  {addTodoToProject} from '../redux/actions'

export default connect(function (state) {
    var currentProject = state.currentProject
    return {
      project: currentProject
    }
  },
  function (dispatch) {
    return {
      submit: function (project,task) {
        dispatch(addTodoToProject(project, task))
      }
    }
  }
)(ProjectDetail)