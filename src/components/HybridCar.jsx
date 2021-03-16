import React from 'react'
import '../electric.css'

class HybridCar extends React.Component {
    render(){
        return(
            <div className="hybrid-car-container">
                <h3>🚗 Hybrid is recommended 🚗</h3>
                <p>A Hybrid get up to 60mpg which lowers total emissions and have no need for charging infrastructure at home</p>
                <p>Hybrids are similarly priced to regular gas vehicles and can fit into any lifestyle</p>
                <p>After 10 years the average electric car emits about two thirds the carbon emissions than an equivalent gas vehicle</p>
            </div>
        )
    }
}

export default HybridCar;