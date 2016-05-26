import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'

import {createProject} from '../redux/actions'
import ProjectForm from '../components/ProjectForm'

export default connect(null,function(dispatch){
  return {
    submit: function(projectName){
      dispatch(createProject(projectName))
    }
  }
}
)(ProjectForm)