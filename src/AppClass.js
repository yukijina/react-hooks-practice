import React, { Component} from 'react';

class AppClass extends Component {
  state =  {
    count: 0,
    isOn: false,
    x: null,
    y: null
  }

  componentDidMount(){
    document.title = `${this.state.count} kai`
    window.addEventListener('mousemove', this.handleMouseMove)
  }

  componentDidUpdate(){
    document.title = `${this.state.count} kai!`
  }

  componentWillUnmount() {
    window.removeEventListener('mouseover', this.handleMouseMove)
  }

  handleMouseMove = event => {
    this.setState({ 
      x: event.pageX,
      y: event.pageY
    })
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  toggleLight = () => {
    this.setState( prevState => ({
      isOn: !prevState.isOn
    }))
  }

  render() {
    return (
      <>
        <h1>Class</h1>
        <button onClick={this.incrementCount}>I'm Class. Increamented {this.state.count}</button>

        <h2>Toggle Light</h2>
        <div
          style={{
            height: '50px',
            width: '50px',
            background: this.state.isOn ? 'yellow' : 'gray' 
          }}
          onClick={this.toggleLight}
        >
        </div>
        <h3>Mouse position:</h3>
        <p>x: {this.state.x}</p>
        <p>y: {this.state.y}</p>
        <hr />
      </>
    );
  }
}

export default AppClass;
