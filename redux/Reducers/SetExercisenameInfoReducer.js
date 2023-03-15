import { createReducer } from "@reduxjs/toolkit";

const SetExerciseNameInfoReducer = (state = {},action) => {
    switch(action.type){
        case "INFONAMES":
            return{
                ...state,
                name: action.payload
            };
            default:
                return state;
    }
}
  export default SetExerciseNameInfoReducer;