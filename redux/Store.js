import { configureStore } from '@reduxjs/toolkit'
import ChangeExercise from './Reducers/ChangeExerciseReducer'
import { combineReducers } from 'redux';
import ChangeRepCount from './Reducers/ChangeRepCountReducer'
  
const Store = configureStore({
    PrFormReducer: {
        ChangeExercise,
        ChangeRepCount,
    }
});
export default Store;
