import React from 'react'
import '../ReviewCard.css'

class ReviewCard extends React.Component{
    render(){
        return(
            <div className="review-container">
                <h3>{this.props.name}</h3>
                <p>{this.props.content} - {this.props.created_at}</p>
            </div>
        )
    }
}

export default ReviewCard;