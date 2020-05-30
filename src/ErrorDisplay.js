import React from 'react';

const ErrorDisplay = (props) => {
	return (
		<div className="error-display">
			<h1> Error: {props.msg} </h1>
		</div>
	);
};

export default ErrorDisplay;
