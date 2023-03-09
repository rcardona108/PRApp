import { configureStore } from '@reduxjs/toolkit';
import {combineReducers} from 'redux'
import SetExerciseNameReducer from './Reducers/SetExerciseNameReducer';
import SetRepCountReducer from './Reducers/SetExerciseNameReducer';
import SetExerciseNameInfoReducer from './Reducers/SetExersiceNameInfoReducer';

const Store = configureStore({reducer: {
  name: SetExerciseNameReducer,
  reps: SetRepCountReducer,
  infoname: SetExerciseNameInfoReducer
}})

export default Store;