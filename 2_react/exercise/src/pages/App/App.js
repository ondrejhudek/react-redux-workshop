import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import SortbleTable from '../../components/SortableTable';
import './App.css';

const headings = ['ID', 'Name'];

class App extends Component {
	state = {
		value: '',
		data: [[1, 'VS Code'], [2, 'Webstorm'], [3, 'Sublime'], [4, 'Notepad++']]
	};

	addValue = () =>
		this.setState({
			data: [...this.state.data, [++this.state.data.length, this.state.value]]
		});

	handleChange = (e) =>
		this.setState({
			value: e.target.value
		});

	render() {
		return (
			<div>
				<SortbleTable headings={headings} rows={this.state.data} />
				<br />
				<input type="text" onChange={this.handleChange} value={this.state.value} />
				<button onClick={this.addValue}>Add</button>
			</div>
		);
	}
}

export default hot(module)(App);
