import React, { Component, Fragment } from 'react';
import Cars from './Cars';

class Store extends Component {
	state = {
		cars: {
			car001: { name: 'Honda', price: 100 },
			car002: { name: 'BMW', price: 150 },
			car003: { name: 'Mercedes', price: 200 }
		},
		electronics: null,
		clothes: null,
		shoes: null
	};
	incrementCarPrice = this.incrementCarPrice.bind(this);
	decrementCarPrice = this.decrementCarPrice.bind(this);

	incrementCarPrice(selectedID) {
		const cars = Object.assign({}, this.state.cars);
		cars[selectedID].price = cars[selectedID].price + 1;
		this.setState({
			cars
		});
	}

	decrementCarPrice(selectedID) {
		const cars = Object.assign({}, this.state.cars);
		cars[selectedID].price = cars[selectedID].price - 1;
		this.setState({
			cars
		});
	}

	render() {
		return (
			<div className="store">
				<h2>Product list:</h2>
				<Cars
					cars={this.state.cars}
					incrementCarPrice={this.incrementCarPrice}
					decrementCarPrice={this.decrementCarPrice}
				/>
				{/* Other potential product categories which we will skip for this demo: */}
				{/* <Electronics electronics={this.state.electronics/> */}
				{/* <Clothes clothes={this.state.clothes/> */}
				{/* <Shoes shoes={this.state.shoes/> */}
			</div>
		);
	}
}

export default Store;
