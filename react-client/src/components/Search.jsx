import React from 'react';
import { Button } from 'semantic-ui-react';
 const styles = {
 	button: {
	borderColor: '#3498db',
  color: '#fff',
  boxShadow: '0 0 40px 40px #3498db inset,0 0 0 0 #3498db',
	borderRadius: '10px'
    // color: 'blue',
    // background: 'black'
  }
 }
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
			<button style={styles.button} onClick={this.search.bind(this)}>Let's Eat!</button>
		</div>)
	}
}


export default Search;