import React from 'react'
import Card from 'antd/es/card/Card';
import { Button } from 'antd';
import "../posts/YourFriends.css"
import "./PeopleYouMayKnow.css"
import useRecommendation from '../../services/useRecommendation';
import { over } from "stompjs";
import SockJS from 'sockjs-client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { incrementNotifications, sendNotificationMessage } from '../../redux/actions/NotificationAction';

var stompClient = null;

function PeopleYouMayKnow() {

    const dispatch = useDispatch();

    const username = localStorage.getItem("username")
    const receiver = "arham"
    const [suggestedFriends] = useRecommendation();

    const sendNotifications = () => {
        
        if(stompClient){
            let notification = {
                friendRequestSender:"afshal",
                message:"Afshal send a friend request",
                friendRequestReceiver:receiver,
                roomId:"1"
            }

            stompClient.send('/app/send-notification',{},JSON.stringify(notification));
        }
    }

    useEffect(() => {
        friendRequestSend();
    },[])

    const friendRequestSend = () => {
        let Sock = new SockJS("http://localhost:5000/ws");
        stompClient = over(Sock);
        stompClient.connect({},onConnected,onError);
        
    }

    const onError = (err) => {
        console.log(err);
    }

    const onConnected = () => {
        stompClient.subscribe("/user/" + "1" + "/private",onPrivateMessageReceived);
    }

    const onPrivateMessageReceived = (payload) => {
        let response = JSON.parse(payload.body);
        dispatch(incrementNotifications());
        dispatch(sendNotificationMessage(response.message));
    }


    return (
        <div style={{ marginTop: 85, width: "95%" }} >
            <h3 style={{ fontWeight: 600, fontSize: 17.5 }} className="people-know-heading">
                People You May Know
            </h3>
            <div style={{
                border: "1px solid red",
                paddingTop: 15,
                paddingBottom: 15,
                borderRadius: "9px"
            }}
                className="your-friends-comp">

                {/* <Card
                    cover=
                    {
                        <img
                            src={ProfilePic} alt=""
                            style={{
                                borderRadius: 10,
                                objectFit: "cover",
                                boxSizing: "border-box"
                            }}
                            className="your-friends-img"
                        />
                    }
                    className="your-friends-card"
                >
                    <div
                        style={{ fontWeight: 550, fontSize: 16 }}
                    >
                        {"Afshal Hassan"}
                    </div>
                    <div
                        style={{ color: "gray", marginTop: 5, fontSize: 12.5 }}
                    >{3 + " Friends"}
                    </div>
                    <Button type='primary' className='see-profile-button'>Add Friend</Button>
                </Card> */}

                {
                    suggestedFriends.map((suggestedFriend,index) => {

                        return (
                            suggestedFriend &&

                            <Card
                                cover=
                                {
                                    <img
                                        src={`http://3.109.123.148/${suggestedFriend.profilePic}`} alt=""
                                        style={{
                                            borderRadius: 10,
                                            objectFit: "cover",
                                            boxSizing: "border-box"
                                        }}
                                        className="your-friends-img"

                                    />
                                }
                                className="your-friends-card"
                                key={index}
                            >
                                <div
                                    style={{ fontWeight: 550, fontSize: 16 }}
                                >
                                    {suggestedFriend.name.charAt(0).toUpperCase() + suggestedFriend.name.slice(1)}
                                </div>
                                <div
                                    style={{ color: "gray", marginTop: 5, fontSize: 12.5 }}
                                >{3 + " Friends"}
                                </div>
                                <Button type='primary' className='see-profile-button' onClick={sendNotifications}>Add Friend</Button>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PeopleYouMayKnow