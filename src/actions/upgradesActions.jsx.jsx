export const addCost = (cost, savings) => ({
    type: "MORE_MONEY",
    payload: {cost: cost, savings: savings}
})
export const subCost = (cost, savings) => ({
    type: "LESS_MONEY",
    payload: {cost: cost, savings: savings
}})
