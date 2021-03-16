import React from 'react';
import Solar from './Solar.jsx'

class CarRecommendations extends React.Component{

    componentDidMount(){
        //let user_id = this.props.location.state.newId
        fetch(`http://127.0.0.1:3000/car_info/1`)
        .then(response => response.json())
        .then(data => console.log(data))
    }

    

    render(){
        return(
            <div>
                <Solar/>
            </div>
        )
    }
}
export default CarRecommendations;