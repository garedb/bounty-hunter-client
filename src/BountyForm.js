import React, { useState } from 'react'

// API URL that we want to call
const API_URL = 'https://bounty-api-gared.herokuapp.com/v1/bounties/'

const BountyForm = props => {
	let [client, setClient] = useState('')
	let [hunters, setHunters] = useState([])
	let [name, setName] = useState('')
	let [reward, setReward] = useState(10000)
	let [ship, setShip] = useState('')
	let [wantedFor, setWantedFor] = useState('')

	const submit = e => {
		e.preventDefault()
		console.log('submit!')
		fetch(API_URL, {
			method: 'POST',
			body: JSON.stringify({
				name,
				client,
				hunters,
				reward,
				ship,
				wantedFor
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(response => {
			console.log('bounty was created')
			// refresh bounties
			props.refresh()
			//clear the state variables
			setClient('')
			setName('')
			setHunters([])
			setShip('')
			setReward('')
			setWantedFor('')

		})
	}


  return (
    <div className="bounty-form">
      <h3>Add New Bounty</h3>
      <form onSubmit={submit}>
      	<div>
      		<label>Name:</label>
      		<input name="name" value={name} required onChange={e => setName(e.target.value)} />
      	</div>
      	<div>
      		<label>Wanted For:</label>
      		<input name="wantedFor" value={wantedFor} onChange={e => setWantedFor(e.target.value)} />
      	</div>
      	<div>
      		<label>Client:</label>
      		<input name="client" value={client} onChange={e => setClient(e.target.value)} />
      	</div>
      	<div>
      		<label>Ship:</label>
      		<input name="ship" value={ship} onChange={e => setShip(e.target.value)} />
      	</div>
      	<div>
      		<label>Reward:</label>
      		<input name="reward" value={reward} type="number" onChange={e => setReward(e.target.value)} />
      	</div>
      	<div>
      		<label>Hunters (Comma-Seperated List):</label>
      		<input name="hunters" value={hunters} onChange={e => setHunters(e.target.value.split(','))} />
      	</div>
      	<input type="submit" value="Make a Bounty" />
      </form>
    </div>
  )
}
export default BountyForm