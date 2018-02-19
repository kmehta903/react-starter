import React from 'react';
const styles = {
  horizontal: {
    width: '100px',
    borderRadius: '10px',
    marginLeft: '3em'
    //border: '3px solid #466368'
  },
  box: {
    width:'25px'
  }
}
const ListItem = (props) => (

  <div className="checkbox">
  	<label>
    <input style={styles.box} type="checkbox" value={props.item.restaurant.id} onChange={props.toggleCheckbox}/><a href={props.item.restaurant.url}>   { props.item.restaurant.name } </a> -- {props.item.restaurant.location.locality}
    <div><img style={styles.horizontal} src={props.item.restaurant.thumb}/></div>
  	</label>
    <br />
  </div>
)

export default ListItem;