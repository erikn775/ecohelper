import React from 'react';

class CarForm extends React.Component{
    state ={
        name: null,
        email: null,
        ownACar: false,
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
}
export default CarForm