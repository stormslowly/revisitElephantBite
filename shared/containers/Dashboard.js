import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'

import  Dashboard from '../components/Dashboard'

export default connect(function(state){
  return {
    projects:state.projects
  }
})(Dashboard)