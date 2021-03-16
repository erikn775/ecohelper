import React from 'react';
import ElectricCar from './ElectricCar.jsx'
import HybridCar from './HybridCar.jsx'
import NoCar from './NoCar.jsx'
import ReviewFrom from './ReviewForm.jsx'
import '../electric.css'


class CarRecommendations extends React.Component{

    state = {
        name: null,
        ownACar: null,
        mpg: null,
        typeOfCar: null,
        chargeAtHome: null
    }

    componentDidMount(){
        //let user_id = this.props.location.state.newId
        fetch(`http://127.0.0.1:3000/car_info/3`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                name: data.name,
                ownACar: data.ownACar,
                mpg: data.mpg,
                typeOfCar: data.typeOfCar,
                chargeAtHome: data.chargeAtHome
            })
        })
    }
    
    
    displayChoice = () => {
        if(this.state.ownACar === false){
            return <NoCar/>
        }
        else if(this.state.chargeAtHome === false){
            return <HybridCar/>
        }
        else{
            return <ElectricCar/>
        }
    }
    

    render(){
        return(
            <div>
                <div className="robot">
                    <h3>Hello! {this.state.name}</h3>
                    <h3>Our Robots have spoken!</h3>
                </div>
                {this.displayChoice()}
                <ReviewFrom/>
            </div>
        )
    }
}
export default CarRecommendations;