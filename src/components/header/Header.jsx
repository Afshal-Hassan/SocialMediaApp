import React, { useEffect, useState } from 'react'
import { Layout, Typography, Input, notification } from 'antd'
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import useNotifications from '../../helper/useNotifications';
import ProfilePic from "../user/Profile.jpeg"
import "./Header.css";
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import useFetchNotification from '../../services/useFetchNotification';



const { Title } = Typography;
const { Text } = Typography;
const { Search } = Input;
function Header() {

    const notificationsCount = useSelector(state => state.changeTheNotification);
    const notificationMessageState = useSelector(state => state.changeTheNotificationMessage);


    const [handleNotifications] = useNotifications();
    const [notificationsOfUser] = useFetchNotification();
    const display = useRef(null);



    useEffect(() => {
        display.current.style.display = "none";
    }, []);

    console.log(notificationsOfUser);

    return (
        <Layout className='header-layout'>
            <Title
                level={2}
                style=
                {{
                    marginBottom: "0.8em",
                    fontFamily: "Lato,Poppins,Muli,sans-serif",
                    color: "#008ad3",
                    fontWeight: "bolder"
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
                    }} />
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
                        onClick={() => handleNotifications(display)}
                    />

                    <div
                        ref={display}
                        style={{
                            width: 400,
                            height: 500,
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
                                fontSize: 25,
                                marginLeft: 20,
                                fontWeight: "bolder"
                            }}
                            className="notifications-title"
                        >Notifications</h2>
                        {
                            notificationsOfUser.length != 0 ?
                                notificationsOfUser.map(notificationOfUser => {

                                    return (
                                        <div
                                            style=
                                            {{
                                                display: "flex",
                                                paddingLeft: 24,
                                                marginTop: 17,
                                                alignItems: "center",
                                                backgroundColor: "whitesmoke",
                                                width: "100%",
                                                height: 70
                                            }}
                                        >
                                            <img src={ProfilePic} alt=""
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
                                                    fontSize: 15,
                                                    fontWeight: 550
                                                }}
                                            >{notificationOfUser.notification}</Text>
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