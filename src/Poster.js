import React from 'react'

const Poster = props => {
  return (
    <div className="poster">
    	<h1>Wanted!</h1>
      <h2><strong>{props.bounty.name}</strong></h2>
      <h3>Reward: ${props.bounty.reward}</h3>
    </div>
  )
}
export default Poster