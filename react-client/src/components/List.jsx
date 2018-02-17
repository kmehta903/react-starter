import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4>Displaying top { props.items.length } search results within a 1.5 mile radius.</h4>
    <form onSubmit={props.handleFormSubmit}>
    	<h4>Select favorites and click to add to database  <button className="btn btn-default" type="submit">Add to Favorites</button> </h4>
    	{ props.items.map((item,i) =><t key={i} label={item.restaurant.name}> <ListItem toggleCheckbox={props.toggleCheckbox} item={item} key={i} i={i}/></t>)}
    </form>
  </div>
)

export default List;