import { combineReducers } from 'redux'
import citiesReducer from './citiesReducer'
import activitiesReducer from './activitesReducer'
import tagsReducer from './tagsReducer'

export default combineReducers({
    cities: citiesReducer,
    activities: activitiesReducer,
    tags: tagsReducer
})