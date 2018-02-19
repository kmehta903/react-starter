import React from 'react';
import ListItem from './ListItem.jsx';
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

const List = (props) => (
  <div>
    <h4>Displaying top { props.items.length } search results within a 1.5 mile radius.</h4>
    <form onSubmit={props.handleFormSubmit}>
    	<h4>Select favorites and click to add to database  <button style={styles.button} className="btn btn-default" type="submit">Add to Favorites</button> </h4>
    	{ props.items.map((item,i) =><t key={i} label={item.restaurant.name}> <ListItem toggleCheckbox={props.toggleCheckbox} item={item} key={i} i={i}/></t>)}
    </form>
  </div>
)

export default List;