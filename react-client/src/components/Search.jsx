import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ''
		}
	}

	onChange(e) {
		this.setState({
			query: e.target.value
		});
	}

	search() {
		this.props.searchRes(this.state.query);
	}

	render() {
		return (<div>
			<h4>Search for restaurants!</h4>
			Enter a keyword (e.g. pizza): <input value={this.state.query} onChange={this.onChange.bind(this)}/>
			<button onClick={this.search.bind(this)}>Let's Eat!</button>
		</div>)
	}
}


export default Search;