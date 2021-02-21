import React from 'react'

class Goto extends React.Component<any, any> {
    render() {
      return (
        <button onClick={() => this.props.App.setLocation(this.props.l)}> 
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
                <Goto l='/films/1' n='Films' App={this.props.App} /><br/>
                <Goto l='/people/1' n='People' App={this.props.App} /><br/>
                <Goto l='/planets/1' n='Planets' App={this.props.App} /><br/>
                <Goto l='/species/1' n='Species' App={this.props.App} /><br/>
                <Goto l='/starships/1' n='Starships' App={this.props.App} /><br/>
                <Goto l='/vehicles/1' n='Vehicles' App={this.props.App} /><br/>
            </div>
        )
    }
}

class Header extends React.Component<any, any> {

    next(l){
        let n = l.indexOf('/', 1)
        return l.substr(0, n) + '/' + (parseInt(l.substr(n + 1)) + 1)
    }

    back(l){
        let n = l.indexOf('/', 1)
        return l.substr(0, n) + '/' + (parseInt(l.substr(n + 1)) - 1)
    }

    render() {
        let location = this.props.App.state.location
        return (
            <div>
                <p>Page Location: {location}</p>
                {
                    location != '/' &&
                    <div>
                        <Goto l={this.next(location)} n='Next' App={this.props.App} /><br/>
                        <Goto l={this.back(location)} n='Back' App={this.props.App} /><br/>
                        <Goto l='/' n='Main' App={this.props.App} /><br/>
                    </div>
                }
            </div>
      )  
    }
}

class Data extends React.Component<any, any> {
    render() {
        console.log(this.props.data)
        let listData = this.props.data.map( (e) => {return <p>{e.k}: {e.v}</p>} )
        console.log(listData)
        return (
            <div>
                {listData}
            </div>
      )  
    }
}

class Films extends React.Component<any, any> {
    render() {
        const data = [
            {k: 'AAA', v: '123'},
            {k: 'BBB', v: '456'},
            {k: 'CCC', v: '789'}
        ]
        console.log(this.props.App)
        return (
            <div>
                <Header App={this.props.App} />
                <Data data={data} App={this.props.App} />
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
        let page = null
        let s = this.state.location.substr(0, this.state.location.indexOf('/', 1))
        if(s == '/films'){
            page = <Films App={this} />
        }else{
            page = <Main App={this} />
        }
        return (
            <div>
                <p>App Location: {this.state.location}</p>
                {page}
            </div>
        )
    }
}
  
  export default App;