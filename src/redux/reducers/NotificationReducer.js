const initialState = 0 ;

const changeTheNotification = (state = initialState , action) => {

    switch( action.type ) {
        case "INCREMENT_NOTIFICATIONS" : return state + 1;
        default : return state;
    }

}



const notificationMessageState=[]

export const changeTheNotificationMessage = (state = notificationMessageState , action ) => {
    switch ( action.type ) {
        case "NOTIFICATION_MESSAGE" : return [...state,action.data]
        case "UPDATE_NOTIFICATION_MESSAGE" : return state.map((state,index) => state.notificationID === action.data.notificationID ? {...state,notificationStatus:"Accepted" } : state)
        default : return state; 
    }
}

export default changeTheNotification;
