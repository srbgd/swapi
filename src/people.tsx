import React from 'react'
import API from './api'
import Header from './header'
import Data from './data'
import Links from  './links'

class People extends React.Component<any, any> {

    get_id(){
        let l = this.props.App.state.location
        return l.substr(l.indexOf('/', 1) + 1)
    }

    render() {
        const id = this.get_id()
        const j = API.people[id]
        return (
            <div>
                <Header App={this.props.App} />
                {
                    (parseInt(id) > 0 && parseInt(id) < 83 && j) &&
                        <div>
                            <Data 
                            data={[
                                {k: 'Name', v: j['name']},
                                {k: 'Birth year', v: j['birth_year']},
                                {k: 'Gender', v: j['gender']},
                                {k: 'Height', v: j['height']},
                                {k: 'Mass', v: j['Mass']}
                            ]} 
                            App={this.props.App} />
                            <Links
                            links={[
                                {l: j['species'], n: 'Species'},
                                {l: [j['homeworld']], n: 'Homeworld'},
                                {l: j['starships'], n: 'Starships'},
                                {l: j['vehicles'], n: 'Vehicles'},
                                {l: j['films'], n: 'Films'}
                            ]}
                            App={this.props.App} />
                        </div>
                }
            </div>
      )
    }
}

export default People