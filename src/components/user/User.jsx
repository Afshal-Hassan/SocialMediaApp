import React , { useEffect } from 'react'
import { Button, Layout, Typography } from "antd";
import "./User.css";
import WhatsOnMind from '../whatsOnMind/WhatsOnMind';
import UserInfo from './UserInfo';
import PostsFeed from '../posts/PostsFeed';
import usePostOfUserWithFriends from '../../services/usePostsOfUserWithFriends';
import { usePost } from '../../hooks/context/PostContext';
import useFetchUserDetails from '../../services/useFetchUserDetails';
import { useParams } from 'react-router-dom';
import useScrollToTop from '../../hooks/custom/useScrollToTop';


const { Title } = Typography;
const { Text } = Typography;

function User() {
    
    const clickedByUser = localStorage.getItem("email");
    const clickOnUser = "afshalhassan7@gmail.com";

    
    
    const [ fetchPostsOfUserWithFriends ] = usePostOfUserWithFriends();
    const { value } = usePost();
    const [ posts, setPosts] = value;

    const [ userDetails, fetchUserDetails ] = useFetchUserDetails();

    console.log(userDetails)

    const { email } = useParams();

    useScrollToTop();
  
    useEffect( () => {
  
      fetchPostsOfUserWithFriends(email);
      fetchUserDetails(clickedByUser, email);

    },[]);
   

    console.log(userDetails);
    return (
        <Layout className='user-layout'>
            <div
                style=
                {{
                    height: "15rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    position: "relative", 
                }}
                >
                <img src={userDetails && userDetails.backgroundImage != null ? `http://13.234.15.230/${userDetails.backgroundImage}` : `http://localhost:3000/defaultbackground.jpg`} style={{  }} alt="" className='background-image' />
                <img src={userDetails && userDetails.profilePic != null ? `http://13.234.15.230/${userDetails.profilePic}` : `http://localhost:3000/defaultprofile.jpeg` } style=
                    {{
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
                    {userDetails && (userDetails.accountOwnership == true ? <Button type='primary' disabled>Account Owner</Button> : (userDetails && userDetails.isFriend == true ? <Button type='primary' disabled>Friends</Button> : <Button type='primary' >Add Friend</Button>))}
            </div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:50}}>
               <div style={{width:"100%"}} className="user-info-contents">
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