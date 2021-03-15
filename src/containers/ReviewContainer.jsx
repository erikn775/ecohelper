import React from 'react';
import ReviewCard from './ReviewCard.jsx'
import '../ReviewCard.css'

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
            <h2 className="review-header">Testimonials</h2>
            {this.state.reviews.map(review => <ReviewCard key={review.id} name={review.name} content={review.content} created_at={review.created_at}/>)}
            </>
        )
    }
}
export default ReviewContainer;