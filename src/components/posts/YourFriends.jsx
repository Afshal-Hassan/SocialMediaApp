import { Button, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';
import ProfilePic from "../user/Profile.jpeg";
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

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 2,
    },
    1300: {
      items: 4,
    }
  };

  const items = item.map(item => {
    return (
      <div>
        <h3>{item.id}</h3>
      </div>
    );
  });

  const email = "afshal@gmail.com"



  return (
    <div style={{ marginTop: 85, borderRadius:"9px",paddingTop:15,paddingBottom:15}} className="your-friends-comp">
      {/* <AliceCarousel
     infinite
     mouseTracking
     disableButtonsControls
     disableDotsControls
    responsive={responsive}
    items={items}
    /> */}
      <Card
        cover=
        {
          <img
            src={ProfilePic} alt=""
            style={{
              borderRadius: 10,
              objectFit: "cover",
              boxSizing:"border-box"
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
        <Button type='primary' className='see-profile-button'>See Profile</Button>
      </Card>

      <Card
        cover=
        {
          <img
            src={ProfilePic} alt=""
            style={{
              width: 200,
              height: 200,
              borderRadius: 10,
              objectFit: "cover",    
              boxSizing:"border-box"       
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
       <Link to={`/profile/${email}`}><Button type='primary' className='see-profile-button'>See Profile</Button></Link>
      </Card>
      <Card
        cover=
        {
          <img
            src={ProfilePic} alt=""
            style={{
              width: 200,
              height: 200,
              borderRadius: 10,
              objectFit: "cover",
              boxSizing:"border-box"
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
        <Button type='primary' className='see-profile-button'>See Profile</Button>
      </Card>
    </div>
  )
}

export default YourFriends