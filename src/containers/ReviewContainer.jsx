import React from 'react';
import ReviewCard from './ReviewCard.jsx'

class ReviewContainer extends React.Component {
    
    state = {
        reviews: []
        }
    
    
    componentDidMount(){
        fetch('http://127.0.0.1:3000/reviews')
            .then(response => response.json())
            .then(reviewData => {
                this.setState({
                    reviews: reviewData
                })
            })
    }

    render(){
        return(
            <>
            <h2>Testimonials</h2>
            {this.state.reviews.map(review => <ReviewCard name={review.name} content={review.content} created_at={review.created_at}/>)}
            </>
        )
    }
}
export default ReviewContainer;