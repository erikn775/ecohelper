import React from 'react';
import {Link} from 'react-router-dom';

class Buttons extends React.Component{

    render(){
        return(
            <>
                <Link to="/car/new">Car Sustainability Helper</Link><br/>
                <Link to="/home/new">Home Sustainability Helper</Link>
            </>
        )
    }
}

export default Buttons 