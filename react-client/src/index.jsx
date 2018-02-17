import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import DBList from './components/DBList.jsx';
import axios from 'axios';
//import {Button} from 'semantic-ui-react'

const styles = {
  header: {
    color: 'blue'
  },
  random: {
    color: 'red'
  },
  searchCol: {
    float: 'left'
  },
  divCol: {
    float: 'left',
    marginLeft: '4em', 
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      isChecked: false,
      faves: [],
      randomEntry: ''
    }
  }

  searchRestaurants(query) {
    axios.post('/items', {
      term: query
    })
    .then( (response) => {
      this.results=[];
      this.setState({
        items: response.data,
        isChecked: false
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  generateRandom() {
    this.size = this.state.faves.length;
    this.getRandomInt = (max) => {
      return Math.floor(Math.random() * Math.floor(max));
    }
    this.setState({
      randomEntry: this.state.faves[this.getRandomInt(this.size)]
    });
  }

  addToDB(array) {
    axios.post('/data', {
      toBeAdded: array,
      rawData: this.state.items
    })
    .then( (response) => {
      console.log('data resp-->',response);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  showDB() {
    axios.get('/data')
    .then ((response) => {
      console.log('respppp',response.data);
      this.setState({
        faves: response.data
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  componentDidMount() {
    this.searchRestaurants('');
    this.results = [];
    this.showDB();
  }

  handleFormSubmit(e) {
    this.addToDB(this.results);
  }
 
  toggleCheckbox(e) {
    this.setState({
      isChecked: !this.state.isChecked
    });
    if(e.target.checked) {
      this.results.push(e.target.value);
    } else if (!e.target.checked && this.results.includes(e.target.value)) {
      this.results.splice(this.results.indexOf(e.target.value), 1);
    }
  }

  render () {
    return (<div>
      <h1 style={styles.header}>Favorite Restaurant Finder</h1>
      
      <div style={styles.searchCol}><Search searchRes={this.searchRestaurants.bind(this)} />
      <List items={this.state.items} toggleCheckbox={this.toggleCheckbox.bind(this)} handleFormSubmit={this.handleFormSubmit.bind(this)}/>
      </div>
      <div style={styles.divCol}><DBList styles={styles} faves={this.state.faves} randomEntry={this.state.randomEntry} generateRandom={this.generateRandom.bind(this)} /></div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));