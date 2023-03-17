import { createReducer } from "@reduxjs/toolkit";
const initialState = {
name : "select a exercise"
};
const SetExerciseNameReducer = (state = 'select a exericse',action) => {
    switch(action.type){
        case "NAME":
            return{
                ...state,
                name: action.payload
            };
            default:
                return state;
    }
}
  export default SetExerciseNameReducer;