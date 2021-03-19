import React from 'react';
import '../upgrades.css'
//import {addSolar} from './actions/upgradesActions.jsx'
import { connect } from 'react-redux'
import {addCost, subCost} from '../actions/upgradesActions.jsx'
import DisplayTotal from './DisplayTotal.jsx';

class LowFlow extends React.Component{

    state = {
        faucetType: null,
        cost: null,
        savings: null,
        clicked: false
    }

    componentDidMount(){
        fetch(`http://127.0.0.1:3000/lowflows/${this.props.unit}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                faucetType: data.faucetType,
                cost: data.cost,
                savings: data.savings
            })
        })
    }

    addToCost = (event) => {
        this.setState({clicked: true})
        const cost = this.state.cost;
        const savings = this.state.savings;
        this.props.addCost(cost, savings)

        if(event.target.parentElement.className === 'lowFlow-container'){
            event.target.parentElement.style = 'border-style: solid; border-color: lightgreen; border-width: 5px;';
        }
        if(event.target.className === 'lowFlow-container'){
            event.target.style = 'border-style: solid; border-color: lightgreen; border-width: 5px;'
        }
    }

    subtractCost = (event) => {
        this.setState({clicked: false})
        const cost = this.state.cost;
        const savings = this.state.savings;
        this.props.subCost(cost, savings)

        if(event.target.parentElement.className === 'lowFlow-container'){
            event.target.parentElement.style = 'border-style: none; border-color: none; border-width: none;';
        }
        if(event.target.className === 'lowFlow-container'){
            event.target.style = 'border-style: none; border-color: none; border-width: none;'
        }
    }

    render(){
        let clicked = this.state.clicked
        return(
            <div onClick={clicked ? this.subtractCost : this.addToCost} className="lowFlow-container">
                <h3 className="lowFlow-title">{this.state.faucetType} Faucets 🚿</h3>
                <p>Cost: ${this.state.cost} Potential Savings: ${this.state.savings}</p>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCost: (cost, savings) => dispatch(addCost(cost, savings)),
        subCost: (cost, savings) => dispatch(subCost(cost, savings))
        }
  }

export default connect(null, mapDispatchToProps)(LowFlow);