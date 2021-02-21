import React from 'react'

let location = '/';

class Goto extends React.Component<any, any> {

    handleClick() {
        location = this.props.n;
    }

    render() {
      return (
        <button onClick={this.handleClick}> 
            {this.props.n}
        </button>
      )
      
    }
}

class App extends React.Component<any, any> {
    render() {
      return (
        <div>
            <p>Location: {location}</p>
            <Goto l='/films' n='Films'/>
        </div>
      )
    }
  }
  
  export default App;