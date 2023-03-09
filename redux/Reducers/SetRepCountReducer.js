
const SetRepCountReducer = (state = {initialState : 'Select a Exercise'},action) => {
    switch(action.type){
        case "REPS":
            return{
                ...state,
                RepCount: action.payload
            };
            default:
                return state;
    }
}
export default SetRepCountReducer;