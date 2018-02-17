import React from 'react';

const ListItem = (props) => (

  <div className="checkbox">
  	<label>
    <input type="checkbox" value={props.item.restaurant.name}/><a href={props.item.restaurant.url}>{ props.item.restaurant.name }</a>
  	</label>
  </div>
  
)

export default ListItem;