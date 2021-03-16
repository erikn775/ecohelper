import React from 'react';
import '../Header.css'

class Header extends React.Component {

    render(){
        return(
            <div className="header">
                <img className="img-header" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Kawaii_earth_clipart.svg/1200px-Kawaii_earth_clipart.svg.png"></img>
                <h1>Sustainablity Helper</h1>
                <p>This app is here to help you learn about ways to make your home more sustainable and start a conversation about ways to lower the impact on the planet</p>
            </div>
        )
    }
}

export default Header