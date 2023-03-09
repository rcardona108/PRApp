import { createAction } from "@reduxjs/toolkit";
const SetRepCount = (payload) => {
    return{
        type: 'REPS',
        payload: payload
    }
};
export default SetRepCount;