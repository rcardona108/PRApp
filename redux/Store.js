import { configureStore } from '@reduxjs/toolkit';
import SetExerciseNameInfoReducer from './Reducers/SetExercisenameInfoReducer';
import SetExerciseNameReducer from './Reducers/SetExerciseNameReducer';
import SetRepCountReducer from './Reducers/SetRepCountReducer';

const Store = configureStore({reducer: {
  infoname : SetExerciseNameInfoReducer,
  ExName: SetExerciseNameReducer,
  Reps: SetRepCountReducer
}})

export default Store;