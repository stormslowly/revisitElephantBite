import React,{PropTypes,Component} from 'react'
import {connect } from 'react-redux'

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return this.props.children
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default connect()(App)
