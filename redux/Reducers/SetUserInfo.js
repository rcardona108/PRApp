const SetUserInfo = (state = {},action) => {
    switch(action.type){
        case "USER_ID":
            return{
                ...state,
                UserID: action.payload
            };
            default:
                return state;
    }
}
export default SetUserInfo;