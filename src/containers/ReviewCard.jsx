import React from 'react'

class ReviewCard extends React.Component{

    render(){
        return(
            <>
            <h3>{title}</h3>
            <p>{content} - {created_at}</p>
            </>
        )
    }
}

export default ReviewCard;