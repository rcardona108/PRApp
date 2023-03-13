import { configureStore } from '@reduxjs/toolkit';
import SetExerciseNameReducer from './Reducers/SetExerciseNameReducer';
import SetRepCountReducer from './Reducers/SetRepCountReducer';

const Store = configureStore({reducer: {
  ExName: SetExerciseNameReducer,
  Reps: SetRepCountReducer
}})

export default Store;