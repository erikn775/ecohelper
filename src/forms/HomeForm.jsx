import React from 'react'
import {Redirect} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap';
import '../stylesheets/form.css'
import HomeRecommendations from '../containers/HomeRecommendations.jsx'

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
            <div className="new-form">
            <h3 className="home-form-title">Home Sustainability Helper</h3>
            <Form onSubmit={this.formSubmit}>
            <Form.Group controlId="home-name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={this.onFormChange} name="name" type="text" />
                </Form.Group>
                <Form.Group controlId="home-email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={this.onFormChange} name="email" type="text" />
                </Form.Group>
                <Form.Group controlId="home-type">
                    <Form.Label>Type of Home</Form.Label>
                    <Form.Control as="select" onChange={this.onFormChange} name="typeOfHome">
                        <option value="">Please Select...</option>
                        <option value="condo">Condo</option>
                        <option value="townhouse">Townhouse</option>
                        <option value="detached house">Detached House</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Solar Panels?</Form.Label>
                    <Form.Control as="select" onChange={this.onFormChange} name="solars">
                        <option value="">Please Select...</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="home-water-heater">
                    <Form.Label>Type of Water Heater</Form.Label>
                    <Form.Control as="select" onChange={this.onFormChange} name="waterHeater">
                        <option value="">Please Select...</option>
                        <option value="tank_natural_gas">Natural Gas Tank</option>
                        <option value="tank_electric">Electric Tank</option>
                        <option value="tankless_natural_gas">Tankless Natural Gas</option>
                        <option value="heat_pump">Hybrid(Heat Pump)</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="home-applicances">
                    <Form.Label>Age of Applicances</Form.Label>
                    <Form.Control onChange={this.onFormChange} name="appliances" type="text"/>
                </Form.Group>
                <Form.Group controlId="home-flow">
                    <Form.Label>Low Flow Water Fixtures</Form.Label>
                    <Form.Control as="select" onChange={this.onFormChange} name="lowFlow">
                        <option value="">Please Select...</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </Form.Control>   
                </Form.Group>
                <Form.Group controlId="home-windows">
                    <Form.Label>Type of Windows</Form.Label>
                    <Form.Control as="select" onChange={this.onFormChange} name="windows">
                        <option value="">Please Select...</option>
                        <option value="single_pane">Single Pane</option>
                        <option value="double_pane">Double Pane</option>
                        <option value="triple_pane">Triple Pane</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="home-heater">
                    <Form.Label>Type of Heater</Form.Label>
                    <Form.Control as="select" onChange={this.onFormChange} name="heater">
                        <option value="">Please Select...</option>
                        <option value="baseboard">Baseboard Heater</option>
                        <option value="natural_gas_furnace">Natural Gas Heater</option>
                        <option value="heat_pump">Heat Pump Heater</option>
                        <option value="mini_split">Mini Split Heater</option>
                        <option value="geothermal">Geo Thermal Heater</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="home-lights">
                    <Form.Label>Type of Lights</Form.Label>
                    <Form.Control as="select" onChange={this.onFormChange} name="lightBulbs">
                        <option value="">Please Select...</option>
                        <option value="led">LED Bulbs</option>
                        <option value="fluorescent">Fluorescent Bulbs</option>
                        <option value="incandescent">Incandescent Bulbs</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    See Recommendations
                </Button>
            </Form>
                {/* <input onChange={this.onFormChange} className="home-name" name="name" type="text" placeholder="Enter Name..."/><br/>
                <input onChange={this.onFormChange} className="home-email" name="email" type="text" placeholder="Enter Email..."/><br/> */}
                {/* <select onChange={this.onFormChange} className="home-type" name="typeOfHome">
                    <option value="">Please Select...</option>
                    <option value="condo">Condo</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="detached house">Detached House</option>
                </select><br/> */}
                {/* <select onChange={this.onFormChange} className="home-solar" name="solars">
                    <option value="">Solar Panels?</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select><br/> */}
                {/* <select onChange={this.onFormChange} className="home-water-heater" name="waterHeater">
                    <option value="">Type of Water Heater...</option>
                    <option value="tank_natural_gas">Natural Gas Tank</option>
                    <option value="tank_electric">Electric Tank</option>
                    <option value="tankless_natural_gas">Tankless Natural Gas</option>
                    <option value="heat_pump">Hybrid(Heat Pump)</option>
                </select><br/> */}
                {/* <input onChange={this.onFormChange} className="home-applicances" name="appliances" type="text" placeholder="Applicances Age..."/><br/> */}
                {/* <select onChange={this.onFormChange} className="home-flow" name="lowFlow">
                    <option value="">Low Flow Water Fixtures...</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select><br/> */}
                {/* <select onChange={this.onFormChange} className="home-windows" name="windows">
                    <option value="">Type of Windows...</option>
                    <option value="single_pane">Single Pane</option>
                    <option value="double_pane">Double Pane</option>
                    <option value="triple_pane">Triple Pane</option>
                </select><br/> */}
                {/* <select onChange={this.onFormChange} className="home-heater" name="heater">
                    <option value="">Type of Heater...</option>
                    <option value="baseboard">Baseboard Heater</option>
                    <option value="natural_gas_furnace">Natural Gas Heater</option>
                    <option value="heat_pump">Heat Pump Heater</option>
                    <option value="mini_split">Mini Split Heater</option>
                    <option value="geothermal">Geo Thermal Heater</option>
                </select><br/> */}
                {/* <select onChange={this.onFormChange} className="home-lights" name="lightBulbs">
                    <option value="">Home Lighting...</option>
                    <option value="led">LED Bulbs</option>
                    <option value="fluorescent">Fluorescent Bulbs</option>
                    <option value="incandescent">Incandescent Bulbs</option>
                </select><br/> */}
                {/* <input className="home-submit" name="submit" type="submit" value="See Recommendations"/>
            </form> */}
            </div>
        )
    }
}
export default HomeForm