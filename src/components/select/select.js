import React, { Component } from 'react';
import Select from 'react-select';
import './select.css';
class App extends Component {
  componentDidMount(){
    this.props.fetchAirports();
  }
  
  render() {
    return (
     <div>
		<header>
			<div className="header-brand">
				<img src="logo.png" height="35"/>
				<p>Check discount ticket prices and pay using your AirCheap points</p>
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
	</div>
    );
  }
}

export default App;
