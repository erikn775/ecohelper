import React from 'react';

class HomeRecommendations extends React.Component{

    componentDidMount(){
        let user_id = this.props.location.state.email
        fetch(`http://127.0.0.1:3000/home_info/${user_id}`)
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
export default HomeRecommendations