import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'

import  Dashboard from '../components/Dashboard'
import {removeProject, shiftProject} from '../redux/actions'

export default connect(function (state) {
  return {
    projects: state.projects
  }
}, function (dispatch) {
  return {
    removeProject: function (index) {
      return dispatch(removeProject(index))
    },
    shiftProject: function (from, to) {
      return dispatch(shiftProject(from, to))
    }
  }
})(Dashboard)