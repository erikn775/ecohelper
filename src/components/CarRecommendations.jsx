import React from 'react';

class CarRecommendations extends React.Component{
    componentDidMount(){
        let user_id = this.props.location.state.newId
        fetch(`http://127.0.0.1:3000/car_info/${user_id}`)
        .then(response => response.json())
        .then(data => console.log(data))
    }
    render(){
        return(
            
            <div>
                <h1>I'm working </h1>
            </div>
        )
    }
}
export default CarRecommendations;