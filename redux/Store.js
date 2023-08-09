import { configureStore } from '@reduxjs/toolkit';
import SetExerciseNameInfoReducer from './Reducers/SetExercisenameInfoReducer';
import SetExerciseNameReducer from './Reducers/SetExerciseNameReducer';
import SetNoteFormReducer from './Reducers/SetNoteFormReducer';
import SetRepCountReducer from './Reducers/SetRepCountReducer';
import SetWeightFormReducer from './Reducers/SetWeightFormReducer.js';
import SetUserInfo from './Reducers/SetUserInfo';

const Store = configureStore({reducer: {
  infoname : SetExerciseNameInfoReducer,
  ExName: SetExerciseNameReducer,
  Reps: SetRepCountReducer,
  WeightForm: SetWeightFormReducer,
  NoteForm: SetNoteFormReducer,
  UserInfo: SetUserInfo
}})

export default Store;