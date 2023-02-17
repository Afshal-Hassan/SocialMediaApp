import React from 'react'
import Layout from 'antd/es/layout/layout'
import { notification } from "antd"
import DefaultProfile from "../../assets/defaultprofile.jpeg"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import Typography from 'antd/es/typography/Typography';
import { useState } from 'react'
import DefaultBackground from "../../assets/defaultbackground.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { updateUserDetailsApiUrl } from '../../apis/apiUrls';

const { Text } = Typography;

function Background() {
 
    const email = localStorage.getItem("email");
    const username = localStorage.getItem("username");


    const [image, setImage] = useState();
    const [api, contextHolder] = notification.useNotification();
    const [progress, setProgress] = useState(0);
    const [ background, setBackground] = useState(null);
    const history = useHistory();
    const dispatch = useDispatch();

    const user = useSelector(state => state.updateUserDetails);

    console.log(user);

    const saveUserDetails = (updatedUser) => {
      const form = new FormData();

      form.append("user", `{
       "email":"${email}",
       "name":"${updatedUser.user.name}",
       "password":"palmar",
       "country":"${updatedUser.user.country}",
       "phoneNo":"${updatedUser.user.phoneNo}"
         }`);

         form.append("image",updatedUser.user.profilePic)
         form.append("backgroundImage",updatedUser.user.backgroundImage)

        axios.put(updateUserDetailsApiUrl(),form)
         .then(res => {
           console.log(res);
         })
         .catch(err => {
           console.log(err);
         })
    }

    const completeProfile = () => {
      const updatedUser = {...user,user:{...user.user,backgroundImage:background}}
 
      console.log(updatedUser);
      
      const form = new FormData();

       form.append("user", `{
        "email":"${email}",
        "name":"${updatedUser.user.name}",
        "password":"palmar",
        "country":"${updatedUser.user.country}",
        "phoneNo":"${updatedUser.user.phoneNo}"
          }`);

        form.append("image",updatedUser.user.profilePic)
        form.append("backgroundImage",updatedUser.user.backgroundImage)

      axios.put(updateUserDetailsApiUrl(),form)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })

      openNotificationWithIcon("success","Profile is completed kindly wait for few seconds","Profile Completion")

      setTimeout(() => {
        history.push('/')
      },1000)
  
  }


  useEffect(() => {
    openNotificationWithIcon('warning','If you didnt select the background image your profile pic will not get saved','About Profile')
  },[])
 
    const onChangeProgress = (value) => {
        setProgress(value);
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

        setBackground(file);

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
          const description = "Your background has been uploaded";
          const message = "Image Uploaded"
          openNotificationWithIcon('success', description,message);
          // onChangeProgress(100);
    
          document.getElementById("update-background-pic").value = null;
    
          // setTimeout(() => {
          //   onChangeProgress(0);
          // }, 2000);
        }
        else {
          document.getElementById("update-background-pic").value = null;
          const description = "File must be of type PNG or JPEG";
          const message = "Incorrect File"
          openNotificationWithIcon('error', description,message);
        }
      }
    
    

  return (
    <Layout className='update-profile-layout'>
        <div style={{ height: 400, borderRadius: 10 }} className="update-profile-background">
        <img src={image != null ? `data:image/png;base64,${image}` : DefaultBackground} alt="" style={{ boxSizing: "border-box", width: "100%", height: "100%", borderRadius: 10 }} />

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
      <label htmlFor='update-background-pic'>

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
          >Update Background</Text>
        </div>
      </label>
      <input type="file" id='update-background-pic' onChange={onChooseFile}  />
      <Button type='primary'
      style={{
       
          marginTop:25,
          fontWeight:500,
          fontFamily: "Lato,Poppins,Muli,sans-serif",
      }}
      onClick={completeProfile}
      >
        Complete Profile
        </Button>
        {contextHolder}
    </Layout>
  )
}

export default Background