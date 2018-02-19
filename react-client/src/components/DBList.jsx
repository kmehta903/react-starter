import React from 'react';

const styles = {
	image: {
		width: '12px'
	},
  button: {
  borderColor: '#3498db',
  color: '#fff',
  boxShadow: '0 0 40px 40px #3498db inset,0 0 0 0 #3498db',
  borderRadius: '10px'
    // color: 'blue',
    // background: 'black'
  }
 
}

const DBList = (props) => (
  <div>
  <h4>Lunch Roulette!</h4>
  Can't decide where to eat? Click here to find a random spot! <button style={styles.button} onClick={props.generateRandom}>Feelin Lucky?</button>
    <h3 style={props.styles.random}>-- {props.randomEntry.name} -- {props.randomEntry.address} --</h3>
    <h4>Currently { props.faves.length } favorites in database:</h4>
    	{ props.faves.map((fave,i) =>
    		<div key={i}><img onClick={() => props.removeFromDB(fave.id)} style={styles.image} src={'https://orig00.deviantart.net/bf3e/f/2017/209/d/3/battle_for_the_big_b__cross_body_newer__by_greatjobguys-dbhye7j.png'}/><a href={fave.url}>    {fave.name}</a>  </div>
    	)}
  </div>
)

export default DBList;