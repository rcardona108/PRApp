const SetWeightFormReducer = (state = {},action) => {
    switch(action.type){
        case "WEIGHT_FORM":
            return{
                ...state,
                weight: action.payload
            };
            default:
                return state;
    };
};
export default SetWeightFormReducer;