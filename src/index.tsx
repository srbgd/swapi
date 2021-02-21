import React from 'react'
import ReactDOM from 'react-dom'

export default {}

export const mount = (Component) => {
	ReactDOM.render(
		<h1>Test</h1>,
		document.getElementById('app')
	)
}

export const unmount = () => {
	ReactDOM.unmountComponentAtNode(document.getElementById('app'))
}
