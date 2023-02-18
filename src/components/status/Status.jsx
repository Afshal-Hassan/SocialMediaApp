import { Card, Layout, Typography } from 'antd'
import Meta from 'antd/es/card/Meta';
import axios from 'axios';
import React, { useEffect } from 'react'
import { fetchFriendsApiUrl } from '../../apis/apiUrls';
import useFetchFriends from '../../services/useFetchFriends';
import "./Status.css";
const { Title } = Typography;

function Status() {
    
    const blob = null;

    const[ friends , fetchFriendsOfUser] = useFetchFriends();
    const email = localStorage.getItem("email");

    useEffect(() => {
        fetchFriendsOfUser(email); 
    },[]);
    
    

    return (
        <Layout className='status-layout'>
            <Card style={{ height: "100%" }} className="status-comp">
                <Meta
                    title="Online Friends"
                    style={{marginBottom:10}}
                />
                { friends.map( (friend) => {
                    return (
                        <div
                            style=
                            {{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: "0.3em",
                            }}
                            key={friend.friendId}
                            >
                                <img src={friend.profilePic ? `http://13.234.15.230/${friend.profilePic}` : "http://13.127.236.214/defaultprofile.jpeg"} style={{width:37,height:37,borderRadius:"100%",}} alt=""/>
                            <Title level={5} style={{marginBottom: "1.7em",marginLeft:10}}>{ friend.name.charAt(0).toUpperCase() + friend.name.slice(1) }</Title>
                        </div>
                    );
                }) }
            </Card>
        </Layout>
    )
}

export default Status