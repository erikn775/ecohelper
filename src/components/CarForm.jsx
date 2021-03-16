import React from 'react';
import {Redirect} from 'react-router-dom'
//import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button, ButtonToolbar, Dropdown } from 'rsuite';
import {Form, Button} from 'react-bootstrap';
import 'rsuite/dist/styles/rsuite-default.css';
import '../carform.css'


class CarForm extends React.Component{
    state ={
        name: null,
        email: null,
        ownACar: null,
        mpg: null,
        typeOfCar: null,
        chargeAtHome: false,
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
            body: JSON.stringify({car_info: this.state})
        };
        fetch('http://127.0.0.1:3000/car_info', configObj)
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
                pathname: "/car/recommendations",
                state: {newId: this.state.newId}
                }}
            />
        }
        // return(
        //     <>
        //         <h2 className="car-form-title">Car Information</h2>
        //         <form onSubmit={this.formSubmit} className="car-form">
        //             <input onChange={this.onFormChange} className="car-name" name="name" type="text" placeholder="Enter Name..."/><br/>
        //             <input onChange={this.onFormChange} className="car-email" name="email" type="text" placeholder="Enter Email..."/><br/>
        //             <select onChange={this.onFormChange} className="car-ownership" name="ownACar">
        //                 <option value="">Do you own a car?</option>
        //                 <option value="true">Yes</option>
        //                 <option value="false">No</option>
        //             </select><br/>
        //             <select onChange={this.onFormChange} className="car-type" name="typeOfCar">
        //                 <option value="">Type of Car</option>
        //                 <option value="midsize_suv">Midsize SUV</option>
        //                 <option value="large_suv">Large SUV</option>
        //                 <option value="truck">Truck</option>
        //                 <option value="compact_car">Compact Car</option>
        //                 <option value="midsize_car">Midsize Car</option>
        //                 <option value="electric">Electric Car</option>
        //             </select><br/>
        //             <input onChange={this.onFormChange} className="car-mpg" name="mpg" type="text" placeholder="Enter MPG..."/><br/>
        //             <select onChange={this.onFormChange} className="car-charge" name="chargeAtHome">
        //                 <option value="">Charge at home?</option>
        //                 <option value="true">Yes</option>
        //                 <option value="false">No</option>
        //             </select><br/>
        //             <input className="car-submit" name="submit" type="submit" value="See Recommendations"/>
        //         </form>
        //     </>
        // )
        return(
            <div className="new-car-form">
                <h3>Car Sustainability Helper</h3>
            <Form>
                <Form.Group controlId="car-name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={this.onFormChange} name="name" type="text" />
                </Form.Group>
                <Form.Group controlId="car-email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={this.onFormChange} name="email" type="text" />
                </Form.Group>
                <Form.Group controlId="car-ownership">
                    <Form.Label>Do you own a car?</Form.Label>
                    <Form.Control as="select" onChange={this.onFormChange} name="ownACar">
                        <option value="">Please Select...</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="car-type">
                    <Form.Label>Type of Car?</Form.Label>
                    <Form.Control as="select" onChange={this.onFormChange} name="typeOfCar">
                        <option value="">Please Select...</option>
                        <option value="midsize_suv">Midsize SUV</option>
                        <option value="large_suv">Large SUV</option>
                        <option value="truck">Truck</option>
                        <option value="compact_car">Compact Car</option>
                        <option value="midsize_car">Midsize Car</option>
                        <option value="electric">Electric Car</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="car-mpg">
                    <Form.Label>Car Mpg</Form.Label>
                    <Form.Control onChange={this.onFormChange} name="mpg" type="text" />
                </Form.Group>
                <Form.Group controlId="car-charge">
                <Form.Label>Ability to charge at home?</Form.Label>
                    <Form.Control as="select" onChange={this.onFormChange} name="chargeAtHome">
                        <option value="">Please Select...</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    See Recommendations
                </Button>
            </Form>
            </div>
        )
    }
}
export default CarForm