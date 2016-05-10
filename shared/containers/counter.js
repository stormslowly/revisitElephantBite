import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'
import {addNumber, setNumber} from '../redux/actions'

class Counter extends Component {
  constructor(props, context) {
    super(props, context)
  }

  componentDidMount() {
    this.interval = setInterval(()=> {
      this.props.dispatch(addNumber(2))
    }, 500)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    var number = this.props.number || 0

    return <div>
      {number}
    </div>
  }
}

Counter.need = [
  (req, state)=> {
    var start = Number(req.query.start) || 0
    return setNumber(start)
  }
]

export default connect(function (store) {
  return {number: store.number}
})(Counter)


