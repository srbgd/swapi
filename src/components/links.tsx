import React from 'react'
import API from '../api'
import Goto from './goto'


class Links extends React.Component<any, any> {

    get_location(url){
        const s = url.split('/').reverse();
        return '/' + s[2] + '/' + s[1];
    }

    get_name(url){
        const s = url.split('/').reverse();
        if(s[1] in API[s[2]]){
            return API[s[2]][s[1]][(s[2] == 'films') ? 'title' : 'name']
        }
        return null
    }

    render() {
        return (
            <div>
                {this.props.links.map( (e) => 
                    {return (
                        <div key={e.n}>
                            <p>{e.n}: </p>
                            {
                                e.l.length == 0 ? 'None'
                                : e.l.map( (link) => {
                                    return this.get_name(link) != null ?
                                        (
                                            <Goto
                                            key={link}
                                            l={this.get_location(link)}
                                            n={this.get_name(link)}
                                            App={this.props.App}
                                            />
                                        
                                        ): null
                                })
                            }
                        </div>
                    )}
                )}
            </div>
      )  
    }
}

export default Links