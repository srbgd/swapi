import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

export default {}

export const mount = (Component) => {
	ReactDOM.render(
		<App />,
		document.getElementById('app')
	)
}

export const unmount = () => {
	ReactDOM.unmountComponentAtNode(document.getElementById('app'))
}
