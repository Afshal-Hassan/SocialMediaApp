import Layout from 'antd/es/layout/layout'
import React from 'react'
import "./UpdateProfile.css";
import DefaultProfile from "../../assets/defaultprofile.jpeg"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { Input, Typography, notification, Button, Card } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Tooltip, Progress } from 'antd';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUserDetailsAction } from '../../redux/actions/UserAction';
import { useEffect } from 'react';

const { Text } = Typography;
function UpdateProfile() {

  const history = useHistory();
  const dispatch = useDispatch();
  const email = localStorage.getItem("email");

  const [username, setUsername] = useState("");
  const [country, setCountry] = useState();
  const [ phoneNo, setPhoneNo ] = useState();
  const [profilePic, setProfilePic] = useState(null);
  const [api, contextHolder] = notification.useNotification();
  
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState();

  const user = {
    name:username.toLowerCase(),
    country:country,
    phoneNo:phoneNo,
    profilePic:profilePic,

  }



  const updateUserDetails = () => {
    if(username.length > 0){
      dispatch(updateUserDetailsAction(user));
      history.push(`/settings/profile/update/background`);
    }
    else
    {
      const description = "Enter username";
      const message = "Username Required"
      openNotificationWithIcon('error', description,message);
    }
   
  }

  const onChangeProgress = (value) => {
    setProgress(value);
  }

  const onChangeUsername = (event) => {
      setUsername(event.target.value);
  }

  const onChangeCountry = (event) => {
    setCountry(event.target.value);
} 

const onChangePhoneNo = (event) => {
  setPhoneNo(event.target.value);
}

  const openNotificationWithIcon = (type, description,message) => {
    api[type]({
      message: message,
      description:
        description
    });
  };


  


  const onChooseFile = (event) => {

    const form = new FormData();
    const date = new Date();
    const currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const file = event.target.files[0];
    const fileType = file.name.split(".")[1];

    setProfilePic(file);

    if (fileType === "png" || fileType === "jpeg" || fileType === "jpg") {
      onChangeProgress(30);
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        const blob = fileReader.result.split(",")[1];

        setImage(blob);
        // setPosts([{ postDescription: null, postImage: blob, createdAt: currentDate, likes: 0, hearts: 0, userEmail: email }, ...posts]);
      }

      onChangeProgress(50);

      // form.append("post", `{
      //     "postDescription":null,
      //     "postImage":null,
      //     "createdAt":"${currentDate}",
      //     "likes":50,
      //     "hearts":60,
      //     "userEmail":"${email}"
      // }`);

      // onChangeProgress(70);
      form.append("image", file);

      // axios.post(savePostApiUrl(), form)
      //     .then(response => console.log(response))
      //     .catch(error => console.log(error));
      const description = "Your image has been uploaded";
      const message = "Image Uploaded"
      openNotificationWithIcon('success', description,message);
      // onChangeProgress(100);

      document.getElementById("update-profile-pic").value = null;

      // setTimeout(() => {
      //   onChangeProgress(0);
      // }, 2000);
    }
    else {
      document.getElementById("update-profile-pic").value = null;
      const description = "File must be of type PNG or JPEG";
      const message = "Incorrect File"
      openNotificationWithIcon('error', description,message);
    }
  }







  return (
    <Layout className='update-profile-layout'>
  
      <div style={{ height: 270, width: 270, borderRadius: 10 }}>
        <img src={image != null ? `data:image/png;base64,${image}` : DefaultProfile} alt="" style={{ boxSizing: "border-box", width: "100%", height: "100%", borderRadius: 10 }} />

      </div>
      {/* {

        progress > 0 ?
          (
            <>
              <span style={{ color: "gray", fontSize: 12.5, fontWeight: 550,marginTop:30 }}>Image Uploaded</span>
              <Progress percent={progress} size="small" className='upload-progress' />
            </>
          )
          : null

      } */}
      <label htmlFor='update-profile-pic'>

        <div style={{

          display: "flex",
          alignItems: "center",
          marginTop: 30,
          background: "#008ad3",
          cursor: "pointer",
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 7,
          paddingBottom: 7,
          borderRadius: 10
        }}>
          <InsertPhotoIcon style={{ width: 20, color: "white" }} />
          <Text
            style=
            {{
              fontWeight: 600,
              fontFamily: "Lato,Poppins,Muli,sans-serif",
              marginLeft: 10, color: "white"
            }}
          >Update Photo</Text>
        </div>
      </label>
      <input type="file" id='update-profile-pic' onChange={onChooseFile} />
      <Input placeholder='Username'
        suffix={
            <Tooltip title="Enter your username" style={{backgroundColor:"whitesmoke" }}>
              <InfoCircleOutlined style={{ color: 'black',backgroundColor:"whitesmoke" }} />
            </Tooltip>
        }
        style={{
          width: 210,
          height: 35,
          marginTop: 25,
          background: 'transparent'
        }}
        className="ant-picker-input"
        value={username}
        onChange={onChangeUsername}
      />
      <Input placeholder='Country'

        // prefix={<UserOutlined className="site-form-item-icon" style={{backgroundColor:"whitesmoke"}}/>}
        suffix={
            <Tooltip title="Enter Country" style={{backgroundColor:"whitesmoke" }}>
              <InfoCircleOutlined style={{ color: 'black',backgroundColor:"whitesmoke" }} />
            </Tooltip>
        }
        style={{
          width: 210,
          height: 35,
          marginTop: 20,
          background: 'transparent'
        }}
        className="ant-picker-input"
        value={country}
        onChange={onChangeCountry}
      />
      <Input placeholder='Phone No'

        // prefix={<UserOutlined className="site-form-item-icon" style={{backgroundColor:"whitesmoke"}}/>}
        suffix={
            <Tooltip title="Enter Phone No" style={{backgroundColor:"whitesmoke" }}>
              <InfoCircleOutlined style={{ color: 'black',backgroundColor:"whitesmoke" }} />
            </Tooltip>
        }
        style={{
          width: 210,
          height: 35,
          marginTop: 20,
          background: 'transparent'
        }}
        className="ant-picker-input"
        value={phoneNo}
        onChange={onChangePhoneNo}
      />
      <Button type='primary'
      style={{
       
          marginTop:25,
          fontWeight:500,
          fontFamily: "Lato,Poppins,Muli,sans-serif",
      }}
      onClick={updateUserDetails}
      >
        Go ahead
        </Button>
        {contextHolder}
    </Layout>
  )
}

export default UpdateProfile