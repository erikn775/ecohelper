const storeTips = (tips) => ({type: "STORE_TIPS", payload: tips})

export const fetchTipData = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/tips')
            .then(response => response.json())
            .then(tipData => {
                debugger
               dispatch(storeTips(tipData))
            })
    }
}