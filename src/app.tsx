import React from 'react'

class Goto extends React.Component<any, any> {
    render() {
      return (
        <button onClick={() => this.props.setLocation(this.props.l)}> 
            {this.props.n}
        </button>
      )
      
    }
}

class Main extends React.Component<any, any> {
    render() {
      return (
        <div>
            <p>Resources:</p>
            <Goto l='/films' n='Films' setLocation={this.props.setLocation} /><br/>
            <Goto l='/people' n='People' setLocation={this.props.setLocation} /><br/>
            <Goto l='/planets' n='Planets' setLocation={this.props.setLocation} /><br/>
            <Goto l='/species' n='Species' setLocation={this.props.setLocation} /><br/>
            <Goto l='/starships' n='Starships' setLocation={this.props.setLocation} /><br/>
            <Goto l='/vehicles' n='Vehicles' setLocation={this.props.setLocation} /><br/>
            <Goto l='/' n='Main' setLocation={this.props.setLocation} />
        </div>
      )
      
    }
}

class App extends React.Component<any, any> {
    constructor(props, state) {
        super(props);
        this.setLocation = this.setLocation.bind(this);
        this.state = {location: '/'};
    }

    setLocation(l){
        this.setState({location: l});
    }

    render() {
      return (
        <div>
            <p>Location: {this.state.location}</p>
            <Main setLocation={this.setLocation}/>
        </div>
      )
    }
  }
  
  export default App;