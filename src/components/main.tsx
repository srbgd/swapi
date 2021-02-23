import React from 'react'
import Goto from './goto'

class Main extends React.Component<any, any> {
    render() {
        return (
            <div>
                <p>Resources:</p>
                <Goto l='/films/1' n='Films' App={this.props.App} /><br/>
                <Goto l='/people/1' n='People' App={this.props.App} /><br/>
                <Goto l='/planets/1' n='Planets' App={this.props.App} /><br/>
                <Goto l='/species/1' n='Species' App={this.props.App} /><br/>
                <Goto l='/starships/2' n='Starships' App={this.props.App} /><br/>
                <Goto l='/vehicles/4' n='Vehicles' App={this.props.App} /><br/>
            </div>
        )
    }
}

export default Main