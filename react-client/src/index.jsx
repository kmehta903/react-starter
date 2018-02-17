import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  searchRestaurants(query) {
    axios.post('/items', {
      term: query
    })
    .then( (response) => {
      //this.getSearchResults();
      this.setState({
        items: response.data
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  // getSearchResults() {
  //   axios.get('/items') 
  //   .then((response) => {
  //     console.log('heresthedata:', response.data);
  //     this.setState({
  //       items: response.data
  //     });
  //   })
  //   .catch((error) => {
  //     console.log('err', error);
  //   });
  // }

  componentDidMount() {
    this.searchRestaurants('');
  }

  render () {
    return (<div>
      <h1>Favorite Restaurant Finder</h1>
      <Search searchRes={this.searchRestaurants.bind(this)} />
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));