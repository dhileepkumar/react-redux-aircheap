let AirCheapAPI ={
	fetchAirports(){
		return fetch('https://aircheapapi.pro-react.com/airports').then((responce)=>{responce.json()})
	}
}

export default AirCheapAPI