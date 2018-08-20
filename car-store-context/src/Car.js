import React, { Fragment } from 'react';

const Cars = props => (
	<Fragment>
		<p>Name: {props.name}</p>
		<p>Price: ${props.price}</p>
		<button onClick={props.incrementPrice}>&uarr;</button>
		<button onClick={props.decrementPrice}>&darr;</button>
	</Fragment>
);
export default Cars;
