import React , { useEffect } from 'react'
import { Button, Layout, Typography } from "antd";
import ProfilePic from "./Profile.jpeg"
import "./User.css";
import WhatsOnMind from '../whatsOnMind/WhatsOnMind';
import UserInfo from './UserInfo';
import PostsFeed from '../posts/PostsFeed';
import usePostOfUserWithFriends from '../../services/usePostsOfUserWithFriends';
import { usePost } from '../../hooks/context/PostContext';
import useFetchUserDetails from '../../services/useFetchUserDetails';


const { Title } = Typography;
const { Text } = Typography;
function User() {
    
    const clickedByUser = "afshal@gmail.com";
    const clickOnUser = "afshal@gmail.com";
    
    const [ fetchPostsOfUserWithFriends ] = usePostOfUserWithFriends();
    const { value } = usePost();
    const [ posts, setPosts] = value;

    const [ userDetails, fetchUserDetails ] = useFetchUserDetails();


    const email = "afshal@gmail.com";
  
    useEffect( () => {
  
      fetchPostsOfUserWithFriends(email);
      fetchUserDetails(clickedByUser, clickOnUser);
  
    },[]);
   

    return (
        <Layout className='user-layout'>
            <div
                style=
                {{
                    border: "1px solid red",
                    height: "15rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    position: "relative", 
                }}
                >
                <img src={userDetails && `http://65.0.99.88/${userDetails.backgroundImage}`} style={{ border: "1px solid black" }} alt="" className='background-image' />
                <img src={userDetails && `http://65.0.99.88/${userDetails.profilePic}`} style=
                    {{
                        border: "1px solid yellow",
                        height: 150, width: 150,
                        boxSizing: "border-box",
                        borderRadius: "100%",
                        position: "absolute",
                        top: 150
                    }} 
                    alt=""
                    />

            </div>
            <div style=
                {{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <Title level={3} style={{ marginTop: 75 }}>{userDetails && (userDetails.name.charAt(0).toUpperCase() + userDetails.name.slice(1))}</Title>
                <Text
                    style=
                    {{
                        fontFamily: "Lato,Poppins,Muli,sans-serif",
                        fontWeight: 550,
                        color: "gray",
                        marginBottom:15
                    }}>
                    {userDetails && userDetails.friendsCount} Friends</Text>
                    {userDetails && (userDetails.accountOwnership == true ? <Button type='primary' disabled>Account Owner</Button> : <Button type='primary' >Add Friend</Button>)}
            </div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:50,border:"1px solid red"}}>
               <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",width:"100%",}}>
                <WhatsOnMind/>
                <UserInfo email = {userDetails && userDetails.email}/>
                </div>
                {posts.map((post,index) => {
                return(
                   post.userEmail=="afshal@gmail.com" ? <PostsFeed image={post.postImage} description={post.postDescription} creator={post.userEmail} createdDate={post.createdAt} likes={post.likes} hearts={post.hearts} key={index}/>
                   :
                   null
                );
            })}
            </div>
        </Layout>
    )
}

export default User