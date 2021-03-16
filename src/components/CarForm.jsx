import React from 'react';
import {Redirect} from 'react-router-dom'
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button, ButtonToolbar, Dropdown } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';


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
        const ownCar = this.state.ownACar
        if(redirect){
            return <Redirect to={{
                pathname: "/home/recommendations",
                state: {newId: this.state.newId}
                }}
            />
        }
        return(
            <>
                <h2 className="car-form-title"></h2>
                <form onSubmit={this.formSubmit} className="car-form">
                    <input onChange={this.onFormChange} className="car-name" name="name" type="text" placeholder="Enter Name..."/><br/>
                    <input onChange={this.onFormChange} className="car-email" name="email" type="text" placeholder="Enter Email..."/><br/>
                    <select onChange={this.onFormChange} className="car-ownership" name="ownACar">
                        <option value="">Do you own a car?</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select><br/>
                    <select onChange={this.onFormChange} className="car-type" name="typeOfCar">
                        <option value="">Type of Car</option>
                        <option value="midsize_suv">Midsize SUV</option>
                        <option value="large_suv">Large SUV</option>
                        <option value="truck">Truck</option>
                        <option value="compact_car">Compact Car</option>
                        <option value="midsize_car">Midsize Car</option>
                        <option value="electric">Electric Car</option>
                    </select><br/>
                    <input onChange={this.onFormChange} className="car-mpg" name="mpg" type="text" placeholder="Enter MPG..."/><br/>
                    <select onChange={this.onFormChange} className="car-charge" name="chargeAtHome">
                        <option value="">Charge at home?</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select><br/>
                </form>
            </>
        )
        // return(
        //     <Form>
        //         <FormGroup>
        //             <ControlLabel>Name</ControlLabel>
        //             <FormControl as="input" onChange={(event) => this.onFormChange(event)} className="car-name" name="name" />
        //             <HelpBlock>Required</HelpBlock>
        //         </FormGroup>
        //         <FormGroup>
        //             <ControlLabel>Email</ControlLabel>
        //             <FormControl onChange={this.onFormChange} className="car-email" name="email" type="text" />
        //             <HelpBlock tooltip>Required</HelpBlock>
        //         </FormGroup>
        //         <FormGroup>
        //             <Dropdown onChange={this.onFormChange} title="Do you own a car?" className="car-ownership" name="ownACar">
        //                 <Dropdown.Item value="true">Yes</Dropdown.Item>
        //                 <Dropdown.Item value="false">No</Dropdown.Item>
        //             </Dropdown>
        //         </FormGroup>
        //         <FormGroup>
        //             <Dropdown onChange={this.onFormChange} title="Car Type" className="car-type" name="typeOfCar">
        //                 <Dropdown.Item value="midsize_suv">Midsize SUV</Dropdown.Item>
        //                 <Dropdown.Item value="large_suv">Large SUV</Dropdown.Item>
        //                 <Dropdown.Item value="truck">Truck</Dropdown.Item>
        //                 <Dropdown.Item value="compact_car">Compact Car</Dropdown.Item>
        //                 <Dropdown.Item value="midsize_car">Midsize Car</Dropdown.Item>
        //                 <Dropdown.Item value="electric">Electric Car</Dropdown.Item>
        //             </Dropdown>
        //         </FormGroup>
        //         <FormGroup>
        //             <ControlLabel>Car Mpg</ControlLabel>
        //             <FormControl onChange={this.onFormChange} className="car-mpg" name="mpg" type="text" />
        //         </FormGroup>
        //         <FormGroup>
        //             <Dropdown onChange={this.onFormChange} title="Ability to charge car at home?" className="car-charge" name="chargeAtHome">
        //                 <Dropdown.Item value="true">Yes</Dropdown.Item>
        //                 <Dropdown.Item value="false">No</Dropdown.Item>
        //             </Dropdown>
        //         </FormGroup>
        //         <FormGroup>
        //         <ButtonToolbar>
        //             <Button appearance="primary">Submit</Button>
        //             <Button appearance="default">Cancel</Button>
        //         </ButtonToolbar>
        //         </FormGroup>
        //     </Form>
        // )
    }
}
export default CarForm