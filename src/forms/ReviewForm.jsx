import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import '../ReviewForm.css';

class ReviewForm extends React.Component{

    state = {
        name: null,
        content: null,
        rating: null,
        redirect: null
    }

    onFormChange = (event) => {
        const data = {...this.state}
        data[event.target.name] = event.target.value
        this.setState(data)
    }

    formSubmit = (event) => {
        event.preventDefault();
        let configObj = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({review: this.state})
        };
        fetch('http://127.0.0.1:3000/reviews', configObj)
        .then(response => response.json())
        .then(data => this.setState({
            redirect: true
        }));
    }

    render(){
        const redirect = this.state.redirect
        if(redirect){
            return <Redirect to={"/"}/>
        }

        return(
            <div className="review-form">
            <h3 className="review-form-title">Leave us a Review</h3>
            <Form onSubmit={this.formSubmit}>
                <Form.Group controlId="review-name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={this.onFormChange} name="name" type="text" />
                </Form.Group>
                <Form.Group controlId="review-rating">
                <Form.Label>Rating</Form.Label>
                    <Form.Control as="select" onChange={this.onFormChange} name="rating">
                        <option value="">Please Select...</option>
                        <option value="5">⭐⭐️⭐️⭐️⭐️</option>
                        <option value="4">⭐⭐️⭐️⭐️</option>
                        <option value="3">⭐⭐️⭐️</option>
                        <option value="2">⭐⭐️</option>
                        <option value="1">⭐</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="review-name">
                    <Form.Label>Review</Form.Label>
                    <Form.Control as="textarea" onChange={this.onFormChange} name="content" type="text" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
        )
    }
}

export default ReviewForm;