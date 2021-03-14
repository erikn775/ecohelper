import React from 'react';

class ReviewContainer extends React.Component {

    state = {
        name: '',
        content: ''
    }

    componentDidMount(){
        fetch('http://127.0.0.1:3000/reviews')
            .then(response => response.json())
            .then(reviewData => {
                debugger
            })
    }

    renderReviews = () => {
        
    }

    render(){
        return(
            <>
            <h3>testimonials</h3>
            {this.renderReviews()}
            </>
        )
    }
}
export default ReviewContainer;