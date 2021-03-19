import React from 'react';
import Solar from '../components/Solar.jsx'
import Heater from '../components/Heater.jsx'
import WaterHeater from '../components/WaterHeater.jsx'
import { connect } from 'react-redux'
import {addCost, subCost} from '../actions/upgradesActions.jsx.jsx'
import '../stylesheets/Home.css'
import DisplayTotal from '../components/DisplayTotal.jsx';
import LightBulbs from '../components/LightBulbs.jsx'
import Windows from '../components/Windows.jsx'
import Appliances from '../components/Appliances.jsx'
import LowFlow from '../components/LowFlow.jsx'
import ReviewForm from '../forms/ReviewForm.jsx'
import NoChanges from '../components/NoChanges.jsx'

class HomeRecommendations extends React.Component{

    state = {
        name: null,
        email: null,
        typeOfHome: null,
        solars: false,
        waterHeater: null,
        appliances: null,
        lowFlow: false,
        windows: null,
        heater: null,
        lightBulbs: null
    }

    componentDidMount(){
        //let user_id = this.props.location.state.newId
        fetch(`http://127.0.0.1:3000/home_info/4`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                name: data.name,
                typeOfHome: data.typeOfHome,
                solars: data.solars,
                waterHeater: data.waterHeater,
                appliances: data.appliances,
                lowFlow: data.lowFlow,
                windows: data.windows,
                heater: data.heater,
                lightBulbs: data.lightBulbs
            })
        })
    }

    displayChoice = () => {
        const componentArray = []
        if (this.state.typeOfHome === 'detached house' && this.state.solars === false ){
            componentArray.push(<Solar unit={1}/>, <Solar unit={2}/>) 
        }
        if (this.state.waterHeater === 'tank_natural_gas'){
            componentArray.push(<WaterHeater unit={3}/>)
        }
        if(this.state.waterHeater === 'tank_electric'){
            componentArray.push(<WaterHeater unit={1}/>, <WaterHeater unit={2}/>)
        }
        if(this.state.appliances > 5){
            componentArray.push(<Appliances unit={1}/>)
        }
        if(this.state.lowFlow === false){
            componentArray.push(<LowFlow unit={1}/>)
        }
        if(this.state.windows === 'single_pane'){
            componentArray.push(<Windows unit={1}/>, <Windows unit={2}/>)
        }
        if(this.state.heater === 'baseboard'){
            componentArray.push(<Heater unit={1}/>)
        }
        if(this.state.heater === 'natural_gas_furnace'){
            componentArray.push(<Heater unit={2}/>)
        }
        if(this.state.lightBulbs != 'led'){
            componentArray.push(<LightBulbs unit={1}/>)
        }
        if(componentArray.length === 0){
            return <NoChanges/>
        }
        else{
            return componentArray
        }
        
    }

    render(){
        return(
            <div>
                <div className="robot">
                    <h3>Hello! {this.state.name}</h3>
                    <h3>Our robots have spoken</h3>
                    <DisplayTotal/>
                </div>
                <div className="home-recommendation">
                    <h3 className="home-recommendation-title">Recommendations</h3>
                    <p className="home-recommendation-content">Click any to get a price estimate for your home</p>
                    {this.displayChoice()}
                </div>
                <div>
                    <ReviewForm/>
                </div>
            </div>
        )
    }
}

export default connect()(HomeRecommendations)