import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to my web store</h1>
				</header>
				<Store />
			</div>
		);
	}
}

export default App;
