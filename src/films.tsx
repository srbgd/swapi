import React from 'react'
import API from './api'
import Header from './header'
import Data from './data'
import Links from  './links'

class Films extends React.Component<any, any> {

    get_id(){
        let l = this.props.App.state.location
        return l.substr(l.indexOf('/', 1) + 1)
    }

    render() {
        const id = this.get_id()
        const j = API.films[id]
        return (
            <div>
                <Header App={this.props.App} />
                {
                    (parseInt(id) > 0 && parseInt(id) < 7 && j) &&
                        <div>
                            <Data 
                            data={[
                                {k: 'Title', v: j['title']},
                                {k: 'Episode', v: j['episode_id']},
                                {k: 'Opening crawl', v: j['opening_crawl']},
                                {k: 'Release date', v: j['release_date']},
                                {k: 'Director', v: j['director']},
                                {k: 'Producer', v: j['producer']}
                            ]} 
                            App={this.props.App} />
                            <Links
                            links={[
                                {l: j['species'], n: 'Species'},
                                {l: j['starships'], n: 'Starships'},
                                {l: j['vehicles'], n: 'Vehicles'},
                                {l: j['characters'], n: 'Characters'},
                                {l: j['planets'], n: 'Planets'},
                            ]}
                            App={this.props.App} />
                        </div>
                }
            </div>
      )
    }
}

export default Films