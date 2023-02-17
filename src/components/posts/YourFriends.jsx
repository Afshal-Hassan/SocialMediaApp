import { Button, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';
import { friendsDataApiUrl } from '../../apis/apiUrls';
import "./YourFriends.css"

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const item = [
  {
    id: 1
  },

  {
    id: 2
  }
]

function YourFriends() {

  const email = localStorage.getItem("email");

  const [yourFriends, setYourFriends] = useState([]);

  useEffect(() => {
    fetchFriendsData();
  }, [])

  const fetchFriendsData = async () => {
    const { data } = await axios.get(friendsDataApiUrl(email));
    setYourFriends(data);
  }

  const responsive = {
    0: {
      items: 2,
      itemWidth: '100%'
    },
    512: {
      items: 2,
      itemWidth: '100%'


    },
    1300: {
      items: 4,
      itemWidth: 150


    }
  };







  return (
    <div style={{ marginTop: 85, width: "95%", display: yourFriends.length > 0 ? "initial" : "none" }}>
      <h3 style={{ fontWeight: 600, fontSize: 17.5 }} className="people-know-heading">
        Your Friends
      </h3>
      <div style={{ borderRadius: "9px", paddingTop: 15, paddingBottom: 15 }} className="your-friends-comp">
        {

          yourFriends.map((yourFriend,index) => (

            <Card
              cover=
              {
                <img
                  src={yourFriend.profilePic ? `http://15.206.210.206/${yourFriend.profilePic}` : `http://localhost:3000/defaultprofile.jpeg`} alt=""
                  style={{
                    borderRadius: 10,
                    objectFit: "cover",
                    boxSizing: "border-box"
                  }}
                  className="your-friends-img"
                />
              }
              key={index}
              className="your-friends-card"
            >
              <div
                style={{ fontWeight: 550, fontSize: 16 }}
              >
                {yourFriend.name.charAt(0).toUpperCase() + yourFriend.name.slice(1)}
              </div>
              <div
                style={{ color: "gray", marginTop: 5, fontSize: 12.5 }}
              >{yourFriend.friendsCount + " Friends"}
              </div>
              <Link to={`/profile/${yourFriend.email}`}><Button type='primary' className='see-profile-button'>See Profile</Button></Link>
            </Card>
          )
          )
        }
      </div>
    </div>
  )
}

export default YourFriends