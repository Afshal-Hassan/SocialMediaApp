import React, { useEffect } from 'react'
import { Layout, Typography, Card, Button } from 'antd';
import "./Login.css"
import { useGoogleLogin } from '@react-oauth/google';
import GoogleIcon from "../../assets/GoogleIcon.png"
import axios from 'axios';
import { checkUserExistsApiUrl, loginApiUrl } from '../../apis/apiUrls';
import { useHistory } from 'react-router-dom';

const { Title } = Typography;
const { Text } = Typography;

// const clientID = "1092107067426-ru4r1hr167uib2tdd10g2v62j4cpu5fh.apps.googleusercontent.com"

function Login() {

  const history = useHistory();

  const checkUserExists = async(email) => {
    const { data } = await axios.get(checkUserExistsApiUrl(email));
    return data;
  }

  const googleLogin = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse);

      axios.post(loginApiUrl(), {

        accessToken: tokenResponse.access_token,
        provider: "google"

      })
        .then(res => {
          localStorage.setItem("jwt", res.data.token);
          localStorage.setItem("email", res.data.email);
          const isUserExists = res.data.isUserExists

          if(isUserExists){
           setTimeout(() => {
            history.push('/');
          }, 500);
          }
          else
          {
              history.push('/settings/profile/update');
          }


          // setTimeout(() => {
          //   history.push('/');
          // }, 500);

        })
        .catch(err => {
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

          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="login-comp"
      >
        <Title
          level={1}
          style=
          {{
            marginBottom: 2,
            fontFamily: "Lato,Poppins,Muli,sans-serif",
            color: "#008ad3",
            fontWeight: "bolder",
            fontSize: 55,
            marginBottom: 13
          }}
          id="login-title-header"
        >facebook</Title>
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", }} className="app-content">
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
            fontStyle: "italic",
            fontSize: 24.5,
            fontFamily: "Poppins,sans-serif",
            fontWeight: 550
          }}
        >It's free and always be!!</Title>
      </div>
      <div style=
        {{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
        className="login-comp"
      >

        <Card
          style=
          {{
            border: "1px solid #ececec",
            boxShadow: "3px 3px 5px 1.5px lightgray",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
          className="login-card"
        >
          <h1
            style=
            {{
              fontWeight: "bolder",
              color: "#212529",
              fontStyle: "italic",
              boxSizing: "border-box",
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
              border: "1px solid #008ad3",
              borderRadius: 9,
              boxSizing: "border-box"
            }}
            className="button-container"

          >
            <div
              style=
              {{
                display: "flex",
                alignItems: "center",
                borderRight: "1px solid #008ad3",
                boxSizing: "border-box",
                height: "100%",
              }}
              className="login-button-container"
            >
              <img src={GoogleIcon} alt=""
                className='google-sign-in-icon'
              />
            </div>
            <Button onClick={() => googleLogin()}
              style=
              {{
                outline: "none",
                border: "none",
                background: "transparent",
                color: "#008ad3",
                fontWeight: 549,
                textAlign: "center",
                fontFamily: "Poppins,sans-serif",
                boxSizing: "border-box"

              }}
              className="google-login-button"
            >Sign in with Google</Button>
          </div>
          <span
            style={{
              textAlign: "center",
              fontFamily: "Poppins,sans-serif",
              marginTop: 20
            }}
          >
            By joining, I {" "}
            <span style={{
              color: "#008ad3"
            }}>
              agree {" "}
            </span>
            to {" "}
            <span style={{
              color: "#008ad3"
            }}>
              Terms & Conditions
            </span></span>
        </Card>

      </div>
    </Layout>
  )
}

export default Login