import React from 'react';
import ReviewCard from '../components/ReviewCard.jsx'
import '../stylesheets/ReviewCard.css'
import {fetchReviewData} from '../actions/reviewActions.jsx'
import { connect } from 'react-redux'

class ReviewContainer extends React.Component {
    
    componentDidMount(){
        this.props.fetchReviewData()
    }

    render(){
        
        return(
            <>
                <h2 className="review-header">Testimonials</h2>
                {this.props.reviews.map(review => <ReviewCard key={review.id} name={review.name} content={review.content} rating={review.rating}/>)}
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReviewData: () => dispatch(fetchReviewData())
    }
}

const mapStateToProps = (state) => {
    return {
      reviews: state.reviews.reviews
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer);