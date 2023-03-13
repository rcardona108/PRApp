
const SetNoteFormReducer = (state = {},action) => {
    switch(action.type){
        case "NOTES_FORM":
            return{
                ...state,
                note: action.payload
            };
            default:
                return state;
    }
}
export default SetRepCountReducer;