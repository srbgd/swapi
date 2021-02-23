import React from 'react'
import API from '../api'
import Header from './header'
import Data from './data'
import Links from  './links'

class Page extends React.Component<any, any> {

    get_id(){
        let l = this.props.App.state.location
        return l.substr(l.indexOf('/', 1) + 1)
    }

    render() {
        const id = this.get_id()
        const j = API[this.props.resource][id]
        return (
            <div>
                <Header App={this.props.App} />
                {
                    (parseInt(id) > 0 && parseInt(id) < this.props.maxCount && j) &&
                        <div>
                            <Data 
                            data={this.props.data.map( (e) => {return {k: e.k, v: j[e.v]}})} 
                            App={this.props.App} />
                            <Links
                            links={this.props.links.map( (e) => {return {l: j[e.l], n: e.n}})}
                            App={this.props.App} />
                        </div>
                }
            </div>
      )
    }
}

export default Page