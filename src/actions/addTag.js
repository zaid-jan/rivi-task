export const addTag = (payload) => {
    return (dispatch) => {
        console.log("payload", payload)
        const action = {
            type: 'addTag',
            payload,
        }
        dispatch(action);
    }
}