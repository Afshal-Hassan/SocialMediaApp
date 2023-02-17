import { combineReducers } from "redux";
import changeTheNotification from "./NotificationReducer";
import { changeTheNotificationMessage } from "./NotificationReducer";
import updateButtonTouched from "./ButtonTouchedReducer";
import updateUserDetails from "./UserReducer";

const rootReducer = combineReducers({
    changeTheNotification,
    changeTheNotificationMessage,
    updateButtonTouched,
    updateUserDetails,
});

export default rootReducer;