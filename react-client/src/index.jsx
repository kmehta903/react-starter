import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import DBList from './components/DBList.jsx';
import axios from 'axios';
//import 'semantic-ui-css/semantic.min.css';


const styles = {

  header: {
    color: 'black',
    fontFamily: 'Helvetica Neue',
    background: '#48b5e9',
    color: 'black',
    // background: '#466368',
    // background: 'linear-gradient(#648880, #293f50)',
    padding: '15px 15px'
  },
  random: {
    color: 'red',
    fontSize: '18px'
  },
  searchCol: {
    float: 'left',
    position: 'relative'
  },
  divCol: {
    float: 'left',
    marginLeft: '3em',
    position: 'relative'
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
      console.log('added to DB! -->',response);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  removeFromDB(element) {
    //e.preventDefault();
    console.log('remove!', element);

    axios.post('/remove', {
      toBeRemoved: element
    })
    .then( (response) => {
      this.showDB();
      console.log('removed from DB! -->', response);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  showDB() {
    axios.get('/data')
    .then ((response) => {
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
    if(this.results.length !==0) {
      alert('Your selection(s) have been added to the database!');
    }
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
    return (<div style={styles.header}>
      <h1 >Favorite Restaurant Finder</h1>
      <div style={styles.searchCol} ><Search searchRes={this.searchRestaurants.bind(this)} />
      <List items={this.state.items} toggleCheckbox={this.toggleCheckbox.bind(this)} handleFormSubmit={this.handleFormSubmit.bind(this)}/>
      </div>
      <div style={styles.divCol}><DBList styles={styles} removeFromDB={this.removeFromDB.bind(this)} faves={this.state.faves} randomEntry={this.state.randomEntry} generateRandom={this.generateRandom.bind(this)} /></div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));