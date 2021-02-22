import React from 'react'
import API from './api'
import Header from './header'
import Data from './data'
import Links from  './links'

class Vehicles extends React.Component<any, any> {

    get_id(){
        let l = this.props.App.state.location
        return l.substr(l.indexOf('/', 1) + 1)
    }

    render() {
        const id = this.get_id()
        const j = API.vehicles[id]
        return (
            <div>
                <Header App={this.props.App} />
                {
                    (parseInt(id) > 0 && parseInt(id) < 37 && j) &&
                        <div>
                            <Data 
                            data={[
                                {k: 'Name', v: j['name']},
                                {k: 'Model', v: j['model']},
                                {k: 'Vehicle class', v: j['vehicle_class']},
                                {k: 'Length', v: j['length']},
                                {k: 'Passengers', v: j['passengers']},
                                {k: 'Crew', v: j['crew']}
                            ]} 
                            App={this.props.App} />
                            <Links
                            links={[
                                {l: j['pilots'], n: 'Pilots'},
                                {l: j['films'], n: 'Films'}
                            ]}
                            App={this.props.App} />
                        </div>
                }
            </div>
      )
    }
}

export default Vehicles