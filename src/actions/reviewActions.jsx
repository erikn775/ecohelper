const storeReviews = (reviews) => ({type: "STORE_REVIEWS", payload: reviews})

export const fetchReviewData = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/reviews')
            .then(response => response.json())
            .then(reviewData => {
                
               dispatch(storeReviews(reviewData))
            })
    }
}