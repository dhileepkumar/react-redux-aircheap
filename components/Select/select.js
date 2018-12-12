import React, { Component } from 'react';
import Select from 'react-select';
import './select.css';
import Tickets from '../Tickets';
class App extends Component {
  componentDidMount(){
		this.props.fetchAirports();
		console.log('error', this.props)
	}
	
	componentWillUpdate(nextProps, nextState){
    let originAndDestinationSelected = nextProps.origin && nextProps.destination;
    let selectionHasChangedSinceLastUpdate = nextProps.origin !== this.props.origin ||
                                             nextProps.destination !== this.props.destination;
    if(originAndDestinationSelected && selectionHasChangedSinceLastUpdate){
      this.props.fetchTickets(nextProps.origin, nextProps.destination);
    }
  }
	
	componentDidUpdate(prevProps){
		console.log('prevProps', prevProps, this.props)
	}
	

  render() {
		let _tickets = this.props.tickets.map((tickets)=>{
				return <Tickets  key={tickets.id} ticket={tickets} />
		});

    return (
     <div>
		<header>
			<div className="header-brand">
				<img src="logo.png" height="35"/>
				<p>Check discount ticket prices and pay using your AirCheap points</p>
				{(this.props.error) ? this.props.error : ''}
			</div>
			<div className="header-route">
			
				<Select
				name="origin"
				value={this.props.origin}
				options={this.props.airports}
				onChange={this.props.onChooseAirport.bind(this,'origin')}
				/>
				
				<Select
				name="destination"
				value={this.props.destination}
				options={this.props.airports}
				onChange={this.props.onChooseAirport.bind(this,'destination')}
				/>
				
			</div>
		</header>
		{_tickets}
	</div>
    );
  }
}

export default App;
