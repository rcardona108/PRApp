import { configureStore } from '@reduxjs/toolkit';
import SetExerciseNameReducer from './Reducers/SetExerciseNameReducer';
import SetNoteFormReducer from './Reducers/SetNoteFormReducer';
import SetRepCountReducer from './Reducers/SetRepCountReducer';
import SetWeightFormReducer from './Reducers/SetWeightFormReducer.js';

const Store = configureStore({reducer: {
  ExName: SetExerciseNameReducer,
  Reps: SetRepCountReducer,
  WeightForm: SetWeightFormReducer,
  NoteForm: SetNoteFormReducer
}})

export default Store;