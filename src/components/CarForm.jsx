import React from 'react';
import {Redirect} from 'react-router-dom'

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

    ownCar = () => {
        if(this.state.ownACar === true){
            <>
            {console.log('hello')}
            
            </>
        }
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
    }
}
export default CarForm