import React from 'react'


class App extends React.Component<any, any> {
    constructor(props, state) {
        super(props);
        this.setLocation = this.setLocation.bind(this);
        this.state = {location: '/'};
    }

    setLocation(l) {
        this.setState({location: l});
    }

    render() {
        return null
    }
}
  
export default App;