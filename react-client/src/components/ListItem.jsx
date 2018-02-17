import React from 'react';
const styles = {
  horizontal: {
    width: '100px'
  },
  vertical: {
    width: '25px',
  }
}
const ListItem = (props) => (

  <div className="checkbox">
  	<label>
    <input type="checkbox" value={props.item.restaurant.id} onChange={props.toggleCheckbox}/><a href={props.item.restaurant.url}>{ props.item.restaurant.name } </a> -- {props.item.restaurant.location.locality}
    <div><img style={styles.horizontal} src={props.item.restaurant.thumb}/></div>
  	</label>
  </div>
  
)

export default ListItem;