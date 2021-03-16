import React from 'react';
import '../electric.css';

class NoCar extends React.Component{
    render(){
        return(
            <div className="no-car-container">
                <h3>🚲 🚉 No changes recommended 🚉 🚲</h3>
                <p>By not owning a car you already are doing the most environmentally friendly option possible</p>
                <p>The average car emits 25 to 30 tons of carbon emissions over its life</p>
            </div>
        )
    }
}

export default NoCar;