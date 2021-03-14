import React from 'react';
import '../Header.css'

class Header extends React.Component {
    render(){
        return(
            <div className="header">
                <h1>Sustainablity Helper</h1>
                <p>This app is here to help you learn about ways to make your home more sustainable and start a conversation about ways to lower the impact on the planet</p>
            </div>
        )
    }
}

export default Header