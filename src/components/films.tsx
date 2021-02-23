import React from 'react'
import Page from  './page'

class Films extends React.Component<any, any> {
    render() {
        return (
                <Page
                data={[
                    {k: 'Title', v: 'title'},
                    {k: 'Episode', v: 'episode_id'},
                    {k: 'Opening crawl', v: 'opening_crawl'},
                    {k: 'Release date', v: 'release_date'},
                    {k: 'Producer', v: 'producer'}
                ]}
                links={[
                    {l: 'species', n: 'Species'},
                    {l: 'vehicles', n: 'Vehicles'},
                    {l: 'starships', n: 'Starships'},
                    {l: 'characters', n: 'Characters'},
                    {l: 'planets', n: 'Planets'}
                ]}
                App={this.props.App}
                maxCount={7} 
                resource='films'   
                />
            )
    }
}

export default Films