let AirCheapAPI ={
	fetchAirports(){
		return fetch('https://aircheapapi.pro-react.com/airports').then((responce)=>{return responce.json()})
	},

	fetchTickets(origin,destination ){
		return fetch(`https://aircheapapi.pro-react.com/tickets?origin=${origin}&destination=${destination}`).then((responce)=>{return responce.json()})
	}
}

export default AirCheapAPI