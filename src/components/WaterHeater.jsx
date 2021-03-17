import React from 'react';
import '../upgrades.css'
//import {addSolar} from './actions/upgradesActions.jsx'

class WaterHeater extends React.Component{

    state = {
        heaterType: null,
        size: null,
        cost: null,
        savings: null
    }

    componentDidMount(){
        fetch(`http://127.0.0.1:3000/water_heater/${this.props.unit}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                heaterType: data.heaterType,
                size: data.size,
                cost: data.cost,
                savings: data.savings
            })
        })
    }

    addToList = (event) => {
        if(event.target.parentElement.className === 'water-heater-container'){
            event.target.parentElement.style = 'border-style: solid; border-color: lightgreen; border-width: 5px;';
        }
        if(event.target.className === 'water-heater-container'){
            event.target.style = 'border-style: solid; border-color: lightgreen; border-width: 5px;'
        }
    }

    render(){
        return(
            <div onClick={this.addToList} className="water-heater-container">
                <h3 className="water-heater-title">{this.state.heaterType} Water Heater</h3>
                <p>Cost: ${this.state.cost} Potential Savings: ${this.state.savings}</p>
            </div>
        )
    }
}
export default WaterHeater;