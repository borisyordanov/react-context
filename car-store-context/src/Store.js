import React from 'react';
import Cars from './Cars';

const Store = () => (
	<div className="store">
		<h2>Product list:</h2>
		<Cars />
		{/* Other potential product categories which we will skip for this demo: */}
		{/* <Electronics electronics={this.state.electronics/> */}
		{/* <Clothes clothes={this.state.clothes/> */}
		{/* <Shoes shoes={this.state.shoes/> */}
	</div>
);

export default Store;
