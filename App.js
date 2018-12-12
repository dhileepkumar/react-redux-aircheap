import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

import AirCheapStore from './store/AppStore';
import SelectForm from './components/Select/select'
import AirportActionCreators from './actions/ActionCreators';
import './App.css'

const mapStateToProps = (state) => (
  {
    airports: state.airports.airports.map(airport => ({ value: airport.code, label: `${airport.city} - ${airport.country} (${airport.code})` })),
    error: state.airports.error,
    origin: state.route.origin,
    destination: state.route.destination,
    tickets: state.tickets.tickets,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchAirports: () => dispatch(AirportActionCreators.fetchAirports()),
    onChooseAirport: (target, airport) => dispatch(AirportActionCreators.chooseAirport(target, airport)),
    fetchTickets: (origin, destination) => dispatch(AirportActionCreators.fetchTickets(origin, destination))
  }
);

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(SelectForm);

class App extends Component {
  render() {
    return (
     <Provider store={AirCheapStore}>
		<AppContainer/>
	</Provider>
    );
  }
}

export default App;
