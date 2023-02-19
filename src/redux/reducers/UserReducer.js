const user = {
}

const updateUserDetails = (state = user , action) => {

    switch( action.type ) {
        case "UPDATE_USER_DETAILS" : return {...state,user: action.data}
        case "RESET_USER_DETAILS" : return user
        default : return state;
    }

}

export default updateUserDetails;