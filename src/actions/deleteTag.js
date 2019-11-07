export const deleteTag = (id) => {
    return (dispatch) => {
        const action = {
            type: 'deleteTag',
            payload: id,
        }
        dispatch(action)
    }
}
