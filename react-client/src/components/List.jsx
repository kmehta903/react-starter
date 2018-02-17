import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> Search Results </h4>
    <h4>Displaying top { props.items.length } results within a 1.5 mile radius.</h4>
    <form>
    	Select favorite restaurants below<button className="btn btn-default" type="submit">Add to Favorites</button>
    	{ props.items.map((item,i) =><t key={i} label={item.restaurant.name}> <ListItem item={item} key={i} /></t>)}
    </form>
  </div>
)

export default List;