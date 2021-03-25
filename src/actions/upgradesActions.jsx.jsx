export const addCost = (cost, savings) => ({
    type: "MORE_MONEY",
    payload: {cost: cost, savings: savings}
})

export const subCost = (cost, savings) => ({
    type: "LESS_MONEY",
    payload: {cost: cost, savings: savings
}})

const storeReviews = (reviews) => ({type: "STORE_REVIEWS", payload: reviews})

export const fetchReviewData = () => {
    return () => {
        fetch('http://127.0.0.1:3000/reviews')
            .then(response => response.json())
            .then(reviewData => {
               dispatchEvent(storeReviews(reviewData))
            })
    }
}