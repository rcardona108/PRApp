import { configureStore } from '@reduxjs/toolkit';
import SetExerciseNameReducer from './Reducers/SetExerciseNameReducer';
import SetRepCountReducer from './Reducers/SetExerciseNameReducer';

const Store = configureStore({reducer: {
  name: SetExerciseNameReducer,
  reps: SetRepCountReducer
}})

export default Store;