const SetNoteFormReducer = (state = {},action) => {
    switch(action.type){
        case "NOTE_FORM":
            return{
                ...state,
                note: action.payload
            };
            default:
                return state;
    }
}
export default SetNoteFormReducer;