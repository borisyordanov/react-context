import React, { Component } from 'react';
import MyProvider from './MyProvider';
import Store from './Store';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<MyProvider>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to my web store</h1>
					</header>
					<Store />
				</div>
			</MyProvider>
		);
	}
}

export default App;
