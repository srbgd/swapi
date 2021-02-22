import React from 'react'

class Goto extends React.Component<any, any> {
    render() {
      return (
        <button onClick={() => this.props.App.setLocation(this.props.l)}> 
            {this.props.n}
        </button>
      )
      
    }
}

export default Goto