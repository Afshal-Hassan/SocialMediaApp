import React, { useEffect } from 'react'
import { Layout, Typography, Input, Button } from 'antd'
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import useNotifications from '../../helper/useNotifications';
import ProfilePic from "../user/Profile.jpeg"
import "./Header.css";
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFetchNotification from '../../services/useFetchNotification';
import { updateNotificationMessage } from '../../redux/actions/NotificationAction';
import { over } from "stompjs";
import SockJS from 'sockjs-client';
import { incrementNotifications, sendNotificationMessage } from '../../redux/actions/NotificationAction';
import axios from 'axios';
import { privateRoomKeyApiUrl, updateNotificationsApiUrl } from '../../apis/apiUrls';
import { allPrivateRoomsKeyOfUser } from '../../apis/apiUrls';
import useProfileSettings from '../../helper/useProfileSettings';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


var stompClient = null;

const { Title } = Typography;
const { Text } = Typography;
const { Search } = Input;
function Header() {

    // const receiver = 'afshal'
    const email = localStorage.getItem("email")
    const username = localStorage.getItem("username");
    const profilePic = localStorage.getItem("profilePic");

    const dispatch = useDispatch();

    const notificationsCount = useSelector(state => state.changeTheNotification);
    const notifications = useSelector(state => state.changeTheNotificationMessage);

    console.log(notifications);


    const [handleNotifications] = useNotifications();
    const [handleProfileSettings] = useProfileSettings();
    const display = useRef(null);
    const profileSettings = useRef(null);

    const acceptFriendRequest = (notification) => {
        onAcceptFriendRequest(notification);
        dispatch(updateNotificationMessage(notification));
    }


    const onAcceptFriendRequest = async (notificationDetails) => {

        const { data } = await axios.get(privateRoomKeyApiUrl(email, notificationDetails.notificationSenderEmail));

        const roomId = data.data[0].room_id;

        if (stompClient) {
            let notification = {
                id: Math.random(),

                notificationSenderName: `${username.charAt(0).toUpperCase() + username.slice(1)}`,

                notification: `${username.charAt(0).toUpperCase() + username.slice(1)} accepted friend request`,

                notificationSenderProfilePic: profilePic ? "http://15.206.210.206/" + profilePic : `http://localhost:3000/defaultprofile.jpeg`,

                notificationStatus: "Accepted",

                friendRequestReceiver: notificationDetails.notificationSenderEmail,

                roomId: roomId.toString()
            }

            axios.put(updateNotificationsApiUrl(notificationDetails.notificationSenderEmail, email), notification)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err)
                })

            stompClient.send('/app/receive-notification', {}, JSON.stringify(notification));
        }
    }

    const connectionWithSocket = () => {
        let Sock = new SockJS("http://localhost:5000/ws");
        stompClient = over(Sock);
        stompClient.connect({}, onAcceptedRequestConnected, onError);

    }


    const onError = (err) => {
        console.log(err);
    }

    const onAcceptedRequestConnected = async () => {
        const { data } = await axios.get(allPrivateRoomsKeyOfUser(email));
        data.map(privateRoomKey => {
            stompClient.subscribe("/user/" + privateRoomKey.roomID.toString() + "/receive/private", onFriendRequestAcceptanceNotificationReceived);

        })
    }

    const onFriendRequestAcceptanceNotificationReceived = (payload) => {

        let response = JSON.parse(payload.body);
        if (email == response.friendRequestReceiver) {
            dispatch(incrementNotifications());
            dispatch(sendNotificationMessage(response));
        }

    }


    useFetchNotification();

    useEffect(() => {
        connectionWithSocket();
        display.current.style.display = "none";
        profileSettings.current.style.display = "none";

    }, []);


    return (
        <Layout className='header-layout'>
            <Title
                level={2}
                style=
                {{
                    marginBottom: "0.8em",
                    fontFamily: "Lato,Poppins,Muli,sans-serif",
                    color: "#008ad3",
                    fontWeight: "bolder",
                }}
                id="title-header"
            >facebook</Title>
            <Search
                style={{ width: "20em" }}
                allowClear
                placeholder="Search"
                enterButton
                className="search-bar"
            />
            <div id='icons-layout'>
                <PersonIcon
                    style={{
                        color: "black",
                        backgroundColor: "#F2F3F5",
                        borderRadius: "100%",
                        padding: "3px",
                        width: 31,
                        height: 31,
                        cursor: "pointer"

                    }}
                    className="person-icon"
                    onClick={() => handleProfileSettings(profileSettings, display)}
                />

                <div
                    ref={profileSettings}
                    style={{
                        width: 200,
                        height: 150,
                        position: "absolute",
                        border: "0.5px solid #ececec",
                        boxShadow: "3px 3px 5px 1.5px lightgray",
                        zIndex: 5,
                        marginTop: 40,
                        marginRight: 100,
                        background: "white",
                        borderRadius: 8,
                        display: "flex",
                        flexDirection: "column"
                    }}
                    id="settings"
                >
                    <h2
                        style=
                        {{
                            fontSize: 22,
                            marginLeft: 20,
                            marginBottom: 15,
                            fontWeight: 709,
                            fontFamily: "Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif",
                            color: "#212529",
                        }}
                        className="notifications-title"
                    >
                        Settings
                    </h2>

                    <div style=
                        {{
                            height: 'fit-content',
                            width: "100%",
                            paddingTop:5,
                            paddingBottom:5,
                         

                        }}

                    >
                        <div className='settings-content-container'>
                            <PersonIcon
                                style={{
                                    width: 15,
                                    height: 15,
                                    cursor: "pointer",
                                    color: "black",
                                    marginRight: 4,
                                    
                                }}
                            />
                            <Link to={`/profile/${email}`}

                                style=
                                {{
                                    textDecoration: "none",
                                    color: "black",
                                    fontWeight: 600,
                                    fontSize: 14,
                                    fontFamily: "Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif",

                                }}
                            >
                                Your Profile
                            </Link>
                        </div>


                        <div className='settings-content-container'>
                            <ExitToAppIcon
                                style={{
                                    width: 15,
                                    height: 15,
                                    cursor: "pointer",
                                    color: "black",
                                    marginRight: 7
                                }}
                            />
                            <Link to={`/profile/${email}`}

                                style=
                                {{
                                    textDecoration: "none",
                                    color: "black",
                                    fontWeight: 600,
                                    fontSize: 14,
                                    fontFamily: "Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif",

                                }}
                            >
                                Log out
                            </Link>
                        </div>
                    </div>

                </div>
                <div
                    style=
                    {{
                        display: "flex",
                        position: "relative",
                        justifyContent: "center",
                        position: "relative",
                        width: 45
                    }}
                >
                    <span
                        style=
                        {{
                            position: "absolute",
                            right: 0,
                            top: 0,
                            fontWeight: 550,
                            backgroundColor: "red",
                            borderRadius: "100%",
                            paddingLeft: 5,
                            paddingRight: 5,
                            fontSize: 11,
                            color: "white"
                        }}
                    >
                        {notificationsCount != 0 ? notificationsCount : null}
                    </span>
                    <NotificationsIcon
                        style={{
                            backgroundColor: "#F2F3F5",
                            borderRadius: "100%",
                            padding: "3px",
                            width: 31,
                            height: 31,
                            cursor: "pointer"
                        }}
                        id="notification-icon"
                        onClick={() => handleNotifications(display, profileSettings)}
                    />

                    <div
                        ref={display}
                        style={{
                            width: 390,
                            height: 550,
                            position: "absolute",
                            border: "0.5px solid #ececec",
                            boxShadow: "3px 3px 5px 1.5px lightgray",
                            zIndex: 5,
                            marginTop: 40,
                            marginRight: 100,
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            flexDirection: "column"
                        }}
                        id="notifications"
                    >
                        <h2
                            style=
                            {{
                                fontSize: 29,
                                marginLeft: 20,
                                marginBottom: 26,
                                fontWeight: "bolder"
                            }}
                            className="notifications-title"
                        >Notifications</h2>

                        {
                            notifications != 0 ?
                                notifications.map((notification, index) => {

                                    return (

                                        <div
                                            style=
                                            {{
                                                display: "flex",
                                                paddingLeft: 20,
                                                marginTop: 10,
                                                alignItems: "center",
                                                width: "100%",
                                                cursor: "pointer",
                                                position: "relative",
                                                height: 70
                                            }}
                                            key={index}
                                            className="notification-content"
                                        >

                                            <img src={notification.notificationSenderProfilePic && notification.notificationSenderProfilePic.includes('http') ? notification.notificationSenderProfilePic : notification.notificationSenderProfilePic ? `http://15.206.210.206/${notification.notificationSenderProfilePic}` : "http://localhost:3000/defaultprofile.jpeg"} alt=""
                                                style=
                                                {{
                                                    width: 37,
                                                    height: 37,
                                                    borderRadius: "100%",
                                                    marginRight: 10
                                                }}
                                            />

                                            <Text
                                                style=
                                                {{
                                                    fontSize: 14.5,
                                                    fontWeight: 550,
                                                    color: "#65676b"
                                                }}
                                                className="notification-message"
                                            >{notification.notification}
                                            </Text>
                                            {
                                                notification.notificationStatus == "Pending" ?

                                                    <>
                                                        <Button type='primary'
                                                            style=
                                                            {{
                                                                marginRight: 8,
                                                            }}
                                                            onClick={() => acceptFriendRequest(notification)}
                                                        >Accept</Button>
                                                        <Button color='white'
                                                            style=
                                                            {{
                                                                marginRight: 3.25
                                                            }}
                                                        >Decline</Button>
                                                    </>
                                                    :
                                                    <Button type='primary' disabled
                                                        style=
                                                        {{
                                                            marginLeft: 25
                                                        }}
                                                    >
                                                        {notification.notificationStatus}
                                                    </Button>
                                            }
                                        </div>
                                    )
                                }
                                )
                                :
                                null
                        }
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default Header