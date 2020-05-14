import React from 'react'
const ShowBounty = props => {
	let display = <h3>Catch those Criminals!</h3>
	if (props.currentBounty.name) {
		// There is a bounty selected
		display = (
			<div>
				<h2>{props.currentBounty.name}: ${props.currentBounty.reward}</h2>
				<h3>Wanted For: {props.currentBounty.wantedFor}</h3>
				<p>
					Last seen on the {props.currentBounty.ship}
				</p>
				<p>
					Hunters on the job: 
					{(props.currentBounty.hunters || []).join(',')}
				</p>
				<p><strong>Status:</strong> {props.currentBounty.captured ? 'CAUGHT' : 'AT LARGE'}</p>
			</div>
		)
	}

  return (
    <div className="show-bounty">
      {display}
    </div>
  )
}
export default ShowBounty