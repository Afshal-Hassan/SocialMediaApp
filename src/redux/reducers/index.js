import { combineReducers } from "redux";
import changeTheNotification from "./NotificationReducer";
import { changeTheNotificationMessage } from "./NotificationReducer";


const rootReducer = combineReducers({
    changeTheNotification,
    changeTheNotificationMessage,
});

export default rootReducer;