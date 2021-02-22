import React from 'react'
import Main from './main'
import Films from './films'
import Planets from './planets'
import Starships from './starships'
import Vehicles from './vehicles'
import Species from './species'
import People from './people'
import './index.css'

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
        const mapping = {
            '/': <Main App={this} />,
            '/films': <Films App={this} />,
            '/planets': <Planets App={this} />,
            '/people': <People App={this} />,
            '/species': <Species App={this} />,
            '/vehicles': <Vehicles App={this} />,
            '/starships': <Starships App={this} />
        }
        let s = this.state.location.substr(0, this.state.location.indexOf('/', 1))
        if(!(s in mapping)){
            s = '/'
        }
        let page = mapping[s]
        return (
            <div>
                <p>App Location: {this.state.location}</p>
                {page}
            </div>
        )
    }
}
  
export default App;