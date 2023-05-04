import { configureStore } from '@reduxjs/toolkit';
import SetExerciseNameInfoReducer from './Reducers/SetExercisenameInfoReducer';
import SetExerciseNameReducer from './Reducers/SetExerciseNameReducer';
import SetNoteFormReducer from './Reducers/SetNoteFormReducer';
import SetRepCountReducer from './Reducers/SetRepCountReducer';
import SetWeightFormReducer from './Reducers/SetWeightFormReducer.js';

const Store = configureStore({reducer: {
  infoname : SetExerciseNameInfoReducer,
  ExName: SetExerciseNameReducer,
  Reps: SetRepCountReducer,
  WeightForm: SetWeightFormReducer,
  NoteForm: SetNoteFormReducer
}})

export default Store;