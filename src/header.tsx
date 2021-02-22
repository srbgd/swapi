import React from 'react'
import Goto from './goto'

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

export default Header