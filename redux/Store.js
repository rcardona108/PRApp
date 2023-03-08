import { configureStore } from '@reduxjs/toolkit';
import SetExerciseNameReducer from './Reducers/SetExerciseNameReducer';

const Store = configureStore({
  reducer: SetExerciseNameReducer,
})

export default Store