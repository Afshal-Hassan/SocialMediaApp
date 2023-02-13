import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { fetchNotificationsApiUrl } from "../apis/apiUrls";


const useFetchNotification = () => {

    const [notificationsOfUser, setNotifications] = useState([]);
    const userEmail = "arham@gmail.com"
    useEffect(() => {
        fetchNotificationsOfUser(userEmail);
    },[])

    const fetchNotificationsOfUser = async(userEmail) => {
        const { data } = await axios.get(fetchNotificationsApiUrl(userEmail));
        console.log(data);
        setNotifications(data);
    }
    return [notificationsOfUser];

};


export default useFetchNotification;