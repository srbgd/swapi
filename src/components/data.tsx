import React from 'react'

class Data extends React.Component<any, any> {
    render() {
        return (
            <div>
                {this.props.data.map( (e) => {return <p key={e.k}>{e.k}: {e.v}</p>} )}
            </div>
      )  
    }
}

export default Data
