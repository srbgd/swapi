import React from 'react'
import API from './api'

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
        return (
            <div>
                {this.props.data.map( (e) => {return <p key={e.k}>{e.k}: {e.v}</p>} )}
            </div>
      )  
    }
}

class Links extends React.Component<any, any> {

    get_location(url){
        const s = url.split('/').reverse();
        return '/' + s[2] + '/' + s[1];
    }

    get_name(url){
        const s = url.split('/').reverse();
        const result = API[s[2]][s[1]][(s[2] == 'films') ? 'title' : 'name']
        return result
    }

    render() {
        console.log(this.props.links)
        return (
            <div>
                {this.props.links.map( (e) => 
                    {return (
                        <div>
                            <p>{e.n}: </p>
                            {
                                e.l.length == 0 ? 'None'
                                : e.l.map( (link) => {
                                    return (
                                        <Goto 
                                        l={this.get_location(link)}
                                        n={this.get_name(link)}
                                        App={this.props.App}
                                        />
                                    )
                                })
                            }
                        </div>
                    )}
                )}
            </div>
      )  
    }
}

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
                    (parseInt(id) > 0 && parseInt(id) < 7) &&
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