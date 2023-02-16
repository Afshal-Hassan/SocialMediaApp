import React, { useEffect } from 'react'
import { Layout, Typography, Card, Button } from 'antd';
import "./Login.css"
import { useGoogleLogin } from '@react-oauth/google';
import GoogleIcon from "../../assets/GoogleIcon.png"
import axios from 'axios';
import { loginApiUrl } from '../../apis/apiUrls';
import { useHistory } from 'react-router-dom';

const { Title } = Typography;
const { Text } = Typography;

// const clientID = "1092107067426-ru4r1hr167uib2tdd10g2v62j4cpu5fh.apps.googleusercontent.com"

function Login() {

  const history = useHistory();

  

  const googleLogin = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse);

      axios.post(loginApiUrl(),{

        accessToken:tokenResponse.access_token,
        provider:"google"

      })
      .then( res => {
        localStorage.setItem("jwt",res.data.token);
        localStorage.setItem("email",res.data.email);
        localStorage.setItem("username",res.data.username);
        
        setTimeout(() => {
            history.push('/');
        },500);

      })
      .catch( err => {
        console.log(err);
      })

    }
  })

  const onFailure = (response) => {
    if (response.error === 'popup_closed_by_user') {
      // Handle the popup closed error
      console.log('Google sign-in popup closed by user');
    } else {
      // Handle other errors
      console.log('Google sign-in failed:', response);
    }
  };



  return (
    <Layout className='login-layout'>
      <div style=
        {{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Title
          level={1}
          style=
          {{
            marginBottom: 2,
            fontFamily: "Lato,Poppins,Muli,sans-serif",
            color: "#008ad3",
            fontWeight: "bolder",
            fontSize: 55,
            marginTop: 175,
            marginBottom:13
          }}
          id="title-header"
        >facebook</Title>
        <div style={{  width:"70%",display:"flex",alignItems:"center",flexDirection:"column",paddingLeft:75 }}>
        <Title level={4}
          style=
          {{
            color: "#65676b",
            fontSize: 15.5,
            marginBottom: 10
          }}

        >Facebook is an online social media and social networking service owned by American company Meta Platforms.
        </Title>
        <Title level={4}
          style=
          {{
            color: "#65676b",
            fontSize: 15.5,
            marginBottom: 50
          }}

        >Facebook is a social utility that connects you with the people around you.
        Welcome to my Facebook feed, where people come to enjoy me.
        </Title>
        </div>
        <Title level={4}
          style=
          {{
            color: "#212529",
            fontStyle:"italic",
            fontSize: 24.5,
            fontFamily: "Poppins,sans-serif",
            fontWeight: 550
          }}
        >It's free and always be!!</Title>
      </div>
      <div style=
        {{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}>

        <Card
          style=
          {{
            border: "1px solid #ececec",
            boxShadow: "3px 3px 5px 1.5px lightgray",
            width: "60%",
            height: 300,
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"flex-start"
          }}
        >
          <h1
          style=
          {{
            fontWeight:"bolder",
            color:"#212529",
            marginBottom:40,
            fontSize:23.5,
            fontStyle:"italic",
            boxSizing:"border-box"
          }}
          className="login-heading"
          >Become a Facebook family!!</h1>
          {/* <GoogleLogin
            onSuccess={onSuccess}
            onError={onFailure}
          /> */}
          <div
            style=
            {{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              border: "1px solid #4285f4",
              width: "fit-content",
              borderRadius:9,
              boxSizing:"border-box"
            }}
          >
            <div
              style=
              {{
                width: "fit-content",
                display: "flex",
                alignItems: "center",
                borderRight: "1px solid #4285f4",
                paddingTop: 7,
                paddingBottom: 7,
                paddingLeft: 15,
                paddingRight: 15,
                boxSizing: "border-box",
                height: "100%",
              }}
            >
              <img src={GoogleIcon} alt=""
              />
            </div>
            <Button onClick={() => googleLogin()}
              style=
              {{
                outline: "none",
                border: "none",
                background: "transparent",
                color: "#4285f4",
                fontWeight: 549,
                fontSize: 16.5,
                textAlign: "center",
                fontFamily: "Poppins,sans-serif",
                marginLeft:40,
                marginRight:40,
                boxSizing:"border-box"

              }}

            >Sign in with Google</Button>
          </div>
        </Card>

      </div>
    </Layout>
  )
}

export default Login