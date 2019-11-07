const initialState = [
    {
        "id": '433301142',
        "text": "Kuala Lumpur"
    },{
        "id": '618192926',
        "text": "Singapore"
    }
]

const tagsReducer = (state = initialState, action) => {
    // console.log("action", action)
    switch(action.type){
        case 'addTag': 
            return [...state, action.payload];
        case 'deleteTag':
            console.log("deleting tag")
            return state.filter((tag, index) => index !== action.payload); 
        default: return state
    }
}

export default tagsReducer