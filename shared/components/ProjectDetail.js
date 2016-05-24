import React from 'react'
import ProgressCircle  from '../components/ProgressCircle'

function ProjectHeader(props) {
  var {project} =  props

  var style = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#FFF',
    height: '150px',
    marginTop: '20px',
    color: '#d1d1d1'
  }

  var logo = {
    width: '110px',
    height: '110px'
  }

  var circle = {
    position: 'absolute',
    height: '150px'
  }
  var imageContainer = {
    width: '150px',
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  var info = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }


  return <div style={style}>
    <div style={circle}>
      <ProgressCircle style={circle} width={150} height={150} radius={60} progress={0.333}/>
    </div>
    <div style={imageContainer}>
      <img style={logo} src="/images/dm_large-1@2x.png" alt="logo"/>
    </div>
    <div style={info}>
      <h1 style={{color:'#999',marginTop:'0px',marginBottom:'10px'}}>{project.name}</h1>
      <div>1/2 tasks left</div>
    </div>
  </div>
}

class NewTodoForm extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {

    var container = {
      marginTop: '20px',
      display: 'flex',
      width: '100%',
      backgroundColor: '#E2DDDD',
      alignItems: 'center',
      border: '2px dashed #aaa'
    }


    var form = {
      width: '100%', height: '60px', lineHeight: '1.1', fontSize: '60px',
      border: '0px', marginLeft: '10px',
      backgroundColor: '#E2DDDD'
    }

    let self = this

    function handleKeyPress(event) {
      if (event.key == 'Enter') {
        let task = self.refs.text.value
        self.props.submit(task)
        self.refs.text.value = ''
      }
    }

    return <div style={container}>
      <span style={{marginLeft:'10px'}}> <img src="/images/add_bite-icon@2x.png" alt="+"/></span>
      <input style={form} ref="text" type="text" placeholder="And A Todo" onKeyPress={handleKeyPress}>
      </input>
    </div>
  }
}

function Todos(props) {

  var {todos} = props

  var todoStyle = {
    height: '60px',
    paddingBottom: '0px',
    paddingTop: '5px',
    paddingLeft: '10px',
    lineHeight: '70px',
    fontSize: '40px',
    borderBottom: '2px #aaa solid',
    color: '#272426'
  }

  var doneStyle = {
    height: '60px',
    paddingBottom: '0px',
    paddingTop: '5px',
    paddingLeft: '10px',
    lineHeight: '70px',
    fontSize: '40px',
    borderBottom: '2px #aaa solid',
    color: '#C5C0BC',
    textDecoration: 'line-through'
  }


  return <div>
    <ul style={{listStyle: 'none',padding:'0px'}}>
      {
        todos.map(function (todo, i) {
          var style = todo.done ? doneStyle : todoStyle
          return <li key={i} style={style}>{todo.task}</li>
        })
      }
    </ul>
  </div>
}


class ProjectDetail extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    var {project, submit} = this.props

    return <div>
      <ProjectHeader project={project}/>
      <NewTodoForm submit={(task)=>submit(project,task)}/>
      <Todos todos={project.todos}/>
    </div>
  }
}

module.exports = ProjectDetail
