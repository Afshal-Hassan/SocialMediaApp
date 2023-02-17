const user = {
}

const updateUserDetails = (state = user , action) => {

    switch( action.type ) {
        case "UPDATE_USER_DETAILS" : return {...state,user: action.data}
        default : return state;
    }

}

export default updateUserDetails;