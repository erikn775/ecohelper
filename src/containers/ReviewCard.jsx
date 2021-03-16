import React from 'react'
import '../ReviewCard.css'

class ReviewCard extends React.Component{

    stars = () => {
        if(this.props.rating === 5){
            return "⭐⭐️⭐️⭐️⭐️"
        } else if(this.props.rating === 4){
            return "⭐⭐️⭐️⭐️"
        } else if(this.props.rating === 3){
            return "⭐⭐️⭐️"
        } else if(this.props.rating === 2){
            return "⭐⭐️"
        } else {
            return "⭐"
        }
    }

    render(){
        return(
            <div className="review-container">
                <h3>{this.props.name} - {this.stars()}</h3>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default ReviewCard;