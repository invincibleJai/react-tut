// import react and reacrDOM
import React from 'react';
import ReactDOM from 'react-dom';

// create a component
const App = () => {
	return <div> Hi there!! </div>
}

// render a component

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);
