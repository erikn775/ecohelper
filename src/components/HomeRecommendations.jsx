import React from 'react';
import Solar from './Solar.jsx'
import Heater from './Heater.jsx'

class HomeRecommendations extends React.Component{

    componentDidMount(){
        //let user_id = this.props.location.state.newId
        fetch(`http://127.0.0.1:3000/home_info/1`)
        .then(response => response.json())
        .then(data => console.log(data))
    }
    render(){
        return(
            
            <div>
                <Solar unit={1}/>
                <Heater unit={1}/>
                <Solar unit={2}/>
                <Heater unit={2}/>
                <Solar unit={3}/>
                <Solar unit={4}/>
            </div>
        )
    }
}
export default HomeRecommendations