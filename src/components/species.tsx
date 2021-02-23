import React from 'react'
import Page from  './page'

class Species extends React.Component<any, any> {
    render() {
        return (
                <Page
                data={[
                    {k: 'Name', v: 'name'},
                    {k: 'Classification', v: 'classification'},
                    {k: 'Designation', v: 'designation'},
                    {k: 'Average height', v: 'average_height'},
                    {k: 'Average lifespan', v: 'average_lifespan'},
                    {k: 'Language', v: 'language'}
                ]}
                links={[
                    {l: 'people', n: 'People'},
                    {l: 'films', n: 'Films'}
                ]}
                App={this.props.App}
                maxCount={38} 
                resource='species'   
                />
            )
    }
}

export default Species