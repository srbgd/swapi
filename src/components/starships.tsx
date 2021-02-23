import React from 'react'
import Page from  '../components/page'

class Starships extends React.Component<any, any> {
    render() {
        return (
                <Page
                data={[
                    {k: 'Name', v: 'name'},
                    {k: 'Model', v: 'model'},
                    {k: 'Starship class', v: 'starship_class'},
                    {k: 'Length', v: 'length'},
                    {k: 'Passengers', v: 'passengers'},
                    {k: 'Crew', v: 'crew'}
                ]}
                links={[
                    {l: 'pilots', n: 'Pilots'},
                    {l: 'films', n: 'Films'}
                ]}
                App={this.props.App}
                maxCount={37} 
                resource='starships'   
                />
            )
    }
}

export default Starships