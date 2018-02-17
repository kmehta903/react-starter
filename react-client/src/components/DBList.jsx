import React from 'react';

const DBList = (props) => (
  <div>
  <h4>Lunch Roulette!</h4>
  Can't decide where to eat? Click here to find a random spot! <button onClick={props.generateRandom}>Feelin Lucky?</button>
    <h3 style={props.styles.random}>-- {props.randomEntry.name} -- {props.randomEntry.address} --</h3>
    <h4>Currently { props.faves.length } favorites in database:</h4>
    	{ props.faves.map((fave,i) =>
    		<li key={i}><a href={fave.url}> {fave.name}</a> </li>
    	)}
  </div>
)

export default DBList;