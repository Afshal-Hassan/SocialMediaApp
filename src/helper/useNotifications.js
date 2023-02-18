import { useDispatch } from "react-redux";
import { setNotificationCountToZero } from "../redux/actions/NotificationAction";
import { useSelector } from "react-redux";



const useNotifications = () => {

    const notificationsCount = useSelector(state => state.changeTheNotification);
    const dispatch = useDispatch();

    const handleNotifications = (display , displaySettings) => {
       if( display.current.style.display === "initial" ) { display.current.style.display = "none" }
          else { 
            
            display.current.style.display = "initial";

          if(notificationsCount > 0) {
            dispatch(setNotificationCountToZero());
          }
            displaySettings.current.style.display = "none";
        }
    }
    return [handleNotifications];
}

export default useNotifications;