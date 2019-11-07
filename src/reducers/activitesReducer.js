const initialState = [];

const activitiesReducer = (state=initialState, action) => {
    // console.log("reducing fam", action.type)
    switch(action.type){
        case 'setActivities':
            // console.log("setting activities", action.payload)
            return action.payload;
        default:
            return state;
    }
}

export default activitiesReducer