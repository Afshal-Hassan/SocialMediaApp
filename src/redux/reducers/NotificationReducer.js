const initialState = 0 ;

const changeTheNotification = (state = initialState , action) => {

    switch( action.type ) {
        case "INCREMENT_NOTIFICATIONS" : return state + 1;
        default : return state;
    }

}



const notificationMessageState={
    notificationMessage: ""
}

export const changeTheNotificationMessage = (state = notificationMessageState , action ) => {
    switch ( action.type ) {
        case "NOTIFICATION_MESSAGE" : return {...notificationMessageState,notificationMessage: action.data};
        default : return state; 
    }
}

export default changeTheNotification;
