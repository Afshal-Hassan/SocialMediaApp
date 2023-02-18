import { Layout, Select, Typography, Card, Button, notification, message } from 'antd'
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./SelectCategories.css"


const { Option } = Select;
const { Title } = Typography;
function SelectCategories() {

  const email = localStorage.getItem("email")

  const [api, contextHolder] = notification.useNotification();

  const interests = ['Sports Category', 'Gaming Category', 'Fashion Category']
  const [selectedInterests, setSelectedInterests] = useState([]);

  const history = useHistory();

  const handleInterests = (values) => {
    setSelectedInterests(values);
  }


  const openNotificationWithIcon = (type, description, message) => {
    api[type]({
      message: message,
      description:
        description
    });
  };



  const afterSelectedInterests = () => {

    if (selectedInterests.length > 0) {

      // api call

      axios.post(`http://13.234.15.230/ml/save/${email}`, {
        
      interests: selectedInterests
      })
        .then(res => {
          
          console.log(res) 
          
          setTimeout(() => {

            history.push('/home');
          },800)
        }
        
        
        )
        .catch(err => console.log(err));



      

    }

    else {

      openNotificationWithIcon('error',"Select atleast one interest",'Error')

    }




  }

  console.log(selectedInterests);

  return (
    <Layout style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100vh",

    }}
      className='select-cat-layout'
    >
      <Card
        style={{

          border: "1px solid #ececec",
          boxShadow: "3px 3px 5px 1.5px lightgray",
          borderRadius: 8,
          marginTop: 130,
          paddingLeft: 30,
          paddingRight: 30,
          height: "fit-content",
          borderRadius: 15
        }}
      >
        <Title level={1}
          style={{
            fontFamily: "Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif",
            color: "forestgreen",
            fontWeight: "bold",
            fontSize: 55,
            height: "100%"
          }}
        >INTERESTS</Title>
      </Card>
      <div style={{ cursor: "pointer", width: "100%", height: "fit-content", display: "flex", justifyContent: "center" }}>
        <Select mode="multiple" style={{ width: '30%', marginTop: 50, cursor: "pointer", color: "black" }} placeholder="Your Interests" value={selectedInterests} onChange={handleInterests}>
          <Option value="Sports">Sports</Option>
          <Option value="Gaming">Gaming</Option>
          <Option value="Fashion">Fashion</Option>
        </Select>
      </div>
      <Button type='primary' size='large'
        style={{
          marginTop: 35
        }}
        onClick={afterSelectedInterests}
      >Go ahead</Button>

      {contextHolder}
    </Layout>
  )
}

export default SelectCategories