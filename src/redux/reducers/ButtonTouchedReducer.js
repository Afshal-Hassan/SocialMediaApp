const initialState = {
    isHeartButtonTouched:false,
    isLikeButtonTouched:false
} ;

const updateButtonTouched = (state = initialState , action) => {

    switch( action.type ) {
        case "UPDATE_HEART_BUTTON_TOUCHED" : return {...state,isHeartButtonTouched:action.data}
        case "UPDATE_LIKE_BUTTON_TOUCHED" : return {...state,isLikeButtonTouched:action.data}
        case "RESET_BUTTON_TOUCHED" : return initialState;
        default : return state;
    }

}


export default updateButtonTouched;