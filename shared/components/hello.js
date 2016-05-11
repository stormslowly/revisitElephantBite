import React from 'react'


class Background extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    var imgSrc = this.props.image
    let style = {
      height: '100%',
      width: '100%',
      overflow: 'scroll',
      backgroundImage: imgSrc
    }

    return <div style={style}>
      {this.props.children}
    </div>
  }
}

function Project(props) {
  var style = {
    textAlign: 'center',
    display:'inline-block',
    height: '200px',
    margin: '10px',
    width:'200px',
    backgroundColor: 'rgba(100,100,100,0.5)'
  }
  var project = props.project
  return <div style={style}>
    <h1>{project.name}</h1>
    <div><span>1</span> / <span>2</span></div>
  </div>
}

function Projects(props) {

  var style = {
    display:'inline-block',
    padding: '50px'
  };
  var projectsStyle = {

    margin: '10px',
    justifyContent:'flex-start',
    flexWrap:'wrap'
  }
  var projects = props.projects

  return <div className='clearfix'>
    <div style={projectsStyle}>
      {projects.map((p)=> <Project project={p}/>)}
    </div>
  </div>
}

class Hello extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    var projects = [
      {name: 'DIY2'},
      {name: 'DIY3'},
      {name: 'DIY farming'},
      {name: 'DIY tools'},
      {name: 'DIY kitchen'},
      {name: 'DIY it'}
    ]
    return <Background image={'url(/images/bg.jpg)'}>
      <Projects projects={projects}/>
    </Background>
  }
}

export default Hello