import React from 'react'
import API from './api'
import Header from './header'
import Data from './data'
import Links from  './links'

class Planets extends React.Component<any, any> {

    get_id(){
        let l = this.props.App.state.location
        return l.substr(l.indexOf('/', 1) + 1)
    }

    render() {
        const id = this.get_id()
        const j = API.planets[id]
        return (
            <div>
                <Header App={this.props.App} />
                {
                    (parseInt(id) > 0 && parseInt(id) < 61 && j) &&
                        <div>
                            <Data 
                            data={[
                                {k: 'Name', v: j['name']},
                                {k: 'Diameter', v: j['diameter']},
                                {k: 'gravity', v: j['gravity']},
                                {k: 'Population', v: j['population']},
                                {k: 'Climate', v: j['climate']},
                                {k: 'Terrain', v: j['terrain']}
                            ]} 
                            App={this.props.App} />
                            <Links
                            links={[
                                {l: j['residents'], n: 'Residents'},
                                {l: j['films'], n: 'Films'}
                            ]}
                            App={this.props.App} />
                        </div>
                }
            </div>
      )
    }
}

export default Planets