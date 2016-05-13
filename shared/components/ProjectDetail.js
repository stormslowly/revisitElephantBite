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
    height: '110px',
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

function NewTodoForm(props) {

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
    border: '0', marginLeft: '10px',
    backgroundColor: '#E2DDDD'
  }


  return <div style={container}>
    <span style={{marginLeft:'10px'}}> <img src="/images/add_bite-icon@2x.png" alt="+"/></span>
    <input style={form} type="text" placeholder="And A Todo">
    </input>
  </div>


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
    <ul style={{listStyle: 'none',padding:'0'}}>
      {
        todos.map(function (todo) {
          var style = todo.done ? doneStyle : todoStyle
          return <li style={style}>{todo.task}</li>
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
    var project = {
      name: 'Fight club beside river',
      tasks: 10,
      done: 2
    }

    var todos = [
      {task: 'choose meal', done: false},
      {task: 'close the lamb', done: false},
      {task: 'react boilerplate', done: true}
    ]

    return <div>
      <ProjectHeader project={project}/>
      <NewTodoForm />
      <Todos todos={todos}/>
    </div>
  }
}

module.exports = ProjectDetail
