import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { ButtonToolbar, Button } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import '../stylesheets/button.css'

export default function Buttons(){
    return(
        <ButtonToolbar className="helper-buttons">
            <Button href="/home/new" appearance="primary">Home Sustainability Helper</Button>
            <Button href="/car/new" appearance="primary">Car Sustainability Helper</Button>
        </ButtonToolbar>
    )
}

 