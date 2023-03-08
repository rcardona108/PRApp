import { createReducer } from "@reduxjs/toolkit";

const SetExerciseNameReducer = (state = {},action) => {
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