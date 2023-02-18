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
import axios from 'axios';
import { allPrivateRoomsKeyOfUser, privateRoomKeyApiUrl, saveNotificationsApiUrl } from '../../apis/apiUrls';


var stompClient = null;

function PeopleYouMayKnow() {

    const dispatch = useDispatch();

    const email = localStorage.getItem("email");
    const username = localStorage.getItem("username");
    const profilePic = localStorage.getItem("profilePic");

    const [suggestedFriends,setSuggestedFriends] = useRecommendation();

    console.log(suggestedFriends);
    const sendNotifications = async (index,suggestedFriend) => {

        console.log(index);
       
        setSuggestedFriends(  suggestedFriends.map(recommendFriends => {
          return (  
          recommendFriends && recommendFriends.map((friend,index) => friend.userId == suggestedFriend.userId ? 
          {...friend, friendRequestStatus:"Pending"} 
          : friend
          )
          )
        })
        );


        const { data } = await axios.get(privateRoomKeyApiUrl(email, suggestedFriend.email));

        const roomId = data.data[0].room_id;

        console.log(roomId.toString());
        if (stompClient) {
            let notification = {
                id: Math.random(),

                notificationSenderName: `${username.charAt(0).toUpperCase() + username.slice(1)}`,

                notificationSenderEmail:`${email}`,

                notification: `${username.charAt(0).toUpperCase() + username.slice(1)} send a friend request`,

                notificationSenderProfilePic: `http://13.234.15.230/${profilePic ? profilePic : `http://13.127.236.214/defaultprofile.jpeg`}`,

                notificationStatus: "Pending",

                friendRequestReceiver: suggestedFriend.email,

                roomId: roomId.toString()
            }
            axios.post(saveNotificationsApiUrl(),notification)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
            stompClient.send('/app/send-notification', {}, JSON.stringify(notification));
        }
    }

    

    useEffect(() => {
       
        friendRequestSend();
    }, [])

    const fetchAllPrivateRoomKeys = async() => {
        const { data } =  await axios.get(allPrivateRoomsKeyOfUser(email));
        console.log(data);
    }

    const friendRequestSend = () => {
        let Sock = new SockJS("http://13.234.15.230/ws");
        stompClient = over(Sock);
        stompClient.connect({}, onConnected, onError);

    }

    const onError = (err) => {
        console.log(err);
    }

    const onConnected = async() => {
        const { data } =  await axios.get(allPrivateRoomsKeyOfUser(email));
        
        data.map(privateRoomKey => {

            stompClient.subscribe("/user/" + privateRoomKey.roomID.toString() + "/send/private", onPrivateMessageReceived);
        })
        
    }


    const onPrivateMessageReceived = (payload) => {
        let response = JSON.parse(payload.body);
        console.log(response)
        if (email == response.friendRequestReceiver) {
            dispatch(incrementNotifications());
            dispatch(sendNotificationMessage(response));
        }

    }

    

    return (
        <div style={{ marginTop: 85, width: "95%" }} >
            <h3 style={{ fontWeight: 600, fontSize: 17.5 }} className="people-know-heading">
                People You May Know
            </h3>
            <div style={{
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
                    suggestedFriends.map
                        (
                            suggestedFriends => {
                                return (
                                    suggestedFriends &&
                                    suggestedFriends.map
                                        ((suggestedFriend, index) => {
                                            return (
                                                suggestedFriend &&

                                                <Card
                                                    cover=
                                                    {
                                                        <img
                                                            src={suggestedFriend.profilePic ? `http://13.234.15.230/${suggestedFriend.profilePic}` : `http://13.127.236.214/defaultprofile.jpeg`} alt=""
                                                            style={{
                                                                borderRadius: 10,
                                                                objectFit: "cover",
                                                                boxSizing: "border-box",
                                                                
                                                            }}
                                                         
                                                            className="your-friends-img"
                                                        />
                                                    }
                                                    style={{marginRight:20}}
                                                    className="your-friends-card"
                                                    key={suggestedFriend.userId}
                                                >
                                                    <div
                                                        style={{ fontWeight: 550, fontSize: 16 }}
                                                    >
                                                        {suggestedFriend.name.charAt(0).toUpperCase() + suggestedFriend.name.slice(1)}
                                                    </div>
                                                    <div
                                                        style={{ color: "gray", marginTop: 5, fontSize: 12.5 }}
                                                    >{suggestedFriend.friendsCount + " Friends"}
                                                    </div>
                                                   {suggestedFriend.friendRequestStatus == "Pending" ? <Button type='primary' className='see-profile-button' disabled>Req Sended</Button> 
                                                   
                                                   : (

                                                    suggestedFriend.isFriend == false ? <Button type='primary' className='see-profile-button' onClick={(index) => sendNotifications(index,suggestedFriend)}>Add Friend</Button> 
                                                    :    
                                                    
                                                    <Button type='primary' className='see-profile-button' disabled>Friends Alr</Button>
                                                    
                                                    )
                                                    }
                                                </Card>
                                            )
                                        }
                                        )
                                )
                            }
                        )
                }
            </div>
        </div>
    )
}

export default PeopleYouMayKnow