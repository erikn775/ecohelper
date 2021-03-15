import React from 'react'
import {Redirect} from 'react-router-dom'
import HomeRecommendations from './HomeRecommendations.jsx'

class HomeForm extends React.Component{
    
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
        lightBulbs: null,
        redirect: false,
        newId: null
    }

    onFormChange = (event) => {
        const data = {...this.state}
        data[event.target.name] = event.target.value
        this.setState(data)
    }

    formSubmit = (event) => {
        event.preventDefault();
        let configObj = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({home_info: this.state})
        };
        fetch('http://127.0.0.1:3000/home_info', configObj)
        .then(response => response.json())
        .then(data => this.setState({
            redirect: true,
            newId: data.id
        }));
        
    }

    render(){
        const redirect = this.state.redirect
        if(redirect){
            return <Redirect to={{
                pathname: "/home/recommendations",
                state: {newId: this.state.newId}
                }}
            />
        }
        return(
            <>
            <h2 className="home-form-title">Home Information</h2>
            <form onSubmit={this.formSubmit} className="new-home-form">
                <input onChange={this.onFormChange} className="home-name" name="name" type="text" placeholder="Enter Name..."/><br/>
                <input onChange={this.onFormChange} className="home-email" name="email" type="text" placeholder="Enter Email..."/><br/>
                <select onChange={this.onFormChange} className="home-type" name="typeOfHome">
                    <option value="">Type of home...</option>
                    <option value="condo">Condo</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="detached house">Detached House</option>
                </select><br/>
                <select onChange={this.onFormChange} className="home-solar" name="solars">
                    <option value="">Solar Panels?</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select><br/>
                <select onChange={this.onFormChange} className="home-water-heater" name="waterHeater">
                    <option value="">Type of Water Heater...</option>
                    <option value="tank_natural_gas">Natural Gas Tank</option>
                    <option value="tank_electric">Electric Tank</option>
                    <option value="tankless_natural_gas">Tankless Natural Gas</option>
                    <option value="heat_pump">Hybrid(Heat Pump)</option>
                </select><br/>
                <input onChange={this.onFormChange} className="home-applicances" name="appliances" type="text" placeholder="Applicances Age..."/><br/>
                <select onChange={this.onFormChange} className="home-flow" name="lowFlow">
                    <option value="">Low Flow Water Fixtures...</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select><br/>
                <select onChange={this.onFormChange} className="home-windows" name="windows">
                    <option value="">Type of Windows...</option>
                    <option value="single_pane">Single Pane</option>
                    <option value="double_pane">Double Pane</option>
                    <option value="triple_pane">Triple Pane</option>
                </select><br/>
                <select onChange={this.onFormChange} className="home-heater" name="heater">
                    <option value="">Type of Heater...</option>
                    <option value="baseboard">Baseboard Heater</option>
                    <option value="natural_gas_furnace">Natural Gas Heater</option>
                    <option value="heat_pump">Heat Pump Heater</option>
                    <option value="mini_split">Mini Split Heater</option>
                    <option value="geothermal">Geo Thermal Heater</option>
                </select><br/>
                <select onChange={this.onFormChange} className="home-lights" name="lightBulbs">
                    <option value="">Home Lighting...</option>
                    <option value="led">LED Bulbs</option>
                    <option value="fluorescent">Fluorescent Bulbs</option>
                    <option value="incandescent">Incandescent Bulbs</option>
                </select><br/>
                <input className="home-submit" name="submit" type="submit" value="See Recommendations"/>
            </form>
            </>
        )
    }
}
export default HomeForm