import React from 'react'
import Page from  './page'

class People extends React.Component<any, any> {
    render() {
        return (
                <Page
                data={[
                    {k: 'Name', v: 'name'},
                    {k: 'Birth year', v: 'birth_year'},
                    {k: 'Gender', v: 'gender'},
                    {k: 'Height', v: 'height'},
                    {k: 'Mass', v: 'mass'}
                ]}
                links={[
                    {l: 'species', n: 'Species'},
                    {l: 'vehicles', n: 'Vehicles'},
                    {l: 'starships', n: 'Starships'},
                    {l: 'films', n: 'Films'}
                ]}
                App={this.props.App}
                maxCount={83} 
                resource='people'   
                />
            )
    }
}

export default People