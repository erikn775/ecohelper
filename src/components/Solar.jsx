import React from 'react';
import '../upgrades.css'
//import {addSolar} from './actions/upgradesActions.jsx'

class Solar extends React.Component{

    state = {
        size: null,
        cost: null,
        savings: null
    }

    componentDidMount(){
        fetch(`http://127.0.0.1:3000/solar/${this.props.unit}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                size: data.size,
                cost: data.cost,
                savings: data.savings
            })
        })
    }

    addToList = (event) => {
        if(event.target.parentElement.className === 'solar-container'){
            event.target.parentElement.style = 'border-style: solid; border-color: lightgreen; border-width: 5px;';
        }
        if(event.target.className === 'solar-container'){
            event.target.style = 'border-style: solid; border-color: lightgreen; border-width: 5px;'
        }
    }

    render(){
        return(
            <div onClick={this.addToList} className="solar-container">
                <h3 className="solar-title">{this.state.size} Solar Panel system recommended</h3>
                <p>Cost: {this.state.cost} Potential Savings: {this.state.savings}</p>
            </div>
        )
    }
}
export default Solar;