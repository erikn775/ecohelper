import React from 'react'

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
        lightbulbs: null,
        redirect: false
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
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({home_info: this.state})
        }
        fetch('http://127.0.0.1:3000/home_infos', configObj)
        .then(response => response.json())
        .then(homeData => {
            this.setState({redirect: true})
        })
    }

    render(){
        return(
            <>
            <h2>Home Information</h2>
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
            </form>
            </>
        )
    }
}
export default HomeForm