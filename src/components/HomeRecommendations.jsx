import React from 'react';
import Solar from './Solar.jsx'
import Heater from './Heater.jsx'
import WaterHeater from './WaterHeater.jsx'
import { connect } from 'react-redux'
import {addCost, subCost} from '../actions/upgradesActions.jsx'
import '../Home.css'
import DisplayTotal from './DisplayTotal.jsx';
import LightBulbs from './LightBulbs.jsx'
import Windows from './Windows.jsx'

class HomeRecommendations extends React.Component{

    componentDidMount(){
        //let user_id = this.props.location.state.newId
        fetch(`http://127.0.0.1:3000/home_info/1`)
        .then(response => response.json())
        .then(data => console.log(data))
    }

    

    render(){
        return(
            <div>
                <div className="robot">
                    <h3>Hello! </h3>
                    <h3>Our robots have spoken!</h3>
                    <DisplayTotal/>
                </div>
                <div className="home-recommendation">
                    <h3 className="home-recommendation-title">Recommendations</h3>
                    <p className="home-recommendation-content">Chose any to get a price estimate for your home</p>
                    <Solar unit={1}/>
                    <Heater unit={1}/>
                    <Solar unit={2}/>
                    <Heater unit={2}/>
                    <Solar unit={3}/>
                    <Solar unit={4}/>
                    <WaterHeater unit={1}/>
                    <WaterHeater unit={3}/>
                    <LightBulbs unit={1}/>
                    <Windows unit={1}/>
                    <Windows unit={2}/>
                </div>
            </div>
        )
    }
}

export default connect()(HomeRecommendations)