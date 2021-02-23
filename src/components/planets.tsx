import React from 'react'
import Page from './page'

class Planets extends React.Component<any, any> {
    render() {
        return (
            <Page
            data={[
                {k: 'Name', v: 'name'},
                {k: 'Diameter', v: 'diameter'},
                {k: 'Gravity', v: 'gravity'},
                {k: 'Population', v: 'population'},
                {k: 'Climate', v: 'climate'},
                {k: 'Terrain', v: 'terrain'}
            ]}
            links={[
                {l: 'residents', n: 'Residents'},
                {l: 'films', n: 'Films'}
            ]}
            App={this.props.App}
            maxCount={61} 
            resource='planets'   
            />
      )
    }
}

export default Planets