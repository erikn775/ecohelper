import React from 'react';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Nav, Icon } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

class Buttons extends React.Component{

    render(){
        return(
            // <Nav>
            //     <Nav.Item icon={<Icon icon="home" />}>
            //         <Nav.Link href="/car/new">Car Sustainability Helper</Nav.Link>
            //     </Nav.Item>
            //     <Nav.Item>
            //         <Nav.Link href="/home/new">Home Sustainability Helper</Nav.Link>
            //     </Nav.Item>
            // </Nav>
            <>
            <NavLink to="/car/new">Car Sustainability Helper</NavLink><br/>
            <NavLink to="/home/new">Home Sustainability Helper</NavLink>
            </>
        )
    }
}

export default Buttons 