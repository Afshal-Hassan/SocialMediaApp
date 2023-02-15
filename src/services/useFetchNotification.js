import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchNotificationsApiUrl } from "../apis/apiUrls";
import { sendNotificationMessage } from "../redux/actions/NotificationAction";
import { persistedStore } from "../store";
import { changeTheNotificationMessage } from "../redux/reducers/NotificationReducer";
import { useSelector } from "react-redux";


const useFetchNotification = () => {
    
    const dispatch = useDispatch();
    const notifications = useSelector(state => state.changeTheNotificationMessage);

    const userEmail = "arham@gmail.com"

    useEffect(() => {

        // persistedStore.purge()
        // if(notifications.length == 0){
            fetchNotificationsOfUser(userEmail);
        // }
        

    },[]);


    const fetchNotificationsOfUser = async(userEmail) => {
        const { data } = await axios.get(fetchNotificationsApiUrl(userEmail));
        data.map(notification => dispatch(sendNotificationMessage(notification)));
    }
};


export default useFetchNotification;