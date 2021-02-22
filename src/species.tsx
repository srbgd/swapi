import React from 'react'
import API from './api'
import Header from './header'
import Data from './data'
import Links from  './links'

class Species extends React.Component<any, any> {

    get_id(){
        let l = this.props.App.state.location
        return l.substr(l.indexOf('/', 1) + 1)
    }

    render() {
        const id = this.get_id()
        const j = API.species[id]
        return (
            <div>
                <Header App={this.props.App} />
                {
                    (parseInt(id) > 0 && parseInt(id) < 38 && j) &&
                        <div>
                            <Data 
                            data={[
                                {k: 'Name', v: j['name']},
                                {k: 'Classification', v: j['classification']},
                                {k: 'Designation', v: j['designation']},
                                {k: 'Average height', v: j['average_height']},
                                {k: 'Average lifespan', v: j['average_lifespan']},
                                {k: 'Language', v: j['language']}
                            ]} 
                            App={this.props.App} />
                            <Links
                            links={[
                                {l: j['people'], n: 'People'},
                                {l: [j['homeworld']], n: 'Homeworld'},
                                {l: j['films'], n: 'Films'}
                            ]}
                            App={this.props.App} />
                        </div>
                }
            </div>
      )
    }
}

export default Species