import { Card, Divider, Typography } from 'antd'
import Layout from 'antd/es/layout/layout'
import React, { useEffect } from 'react'
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import "./Post.css";
import PostsFeed from './PostsFeed';
import usePostOfUserWithFriends from '../../services/usePostsOfUserWithFriends';
import axios from 'axios';
import { usePost } from '../../hooks/context/PostContext';
import { savePostApiUrl } from '../../apis/apiUrls';
import Stories from '../stories/Stories';
import { useLoader } from '../../hooks/context/LoadingContext';




const { Text } = Typography;

function Posts() {
    const handleWhatsOnYourMind = () => {
        console.log('Yes');
    }

    const [fetchPostsOfUserWithFriends] = usePostOfUserWithFriends();
    const { value } = usePost();
    const [posts, setPosts] = value;
    const [loading, setLoading] = useLoader();


    const email = "afshal@gmail.com";

    useEffect(() => {

        fetchPostsOfUserWithFriends(email);

    }, []);

    console.log(posts);


    const onChooseFile = (event) => {
        const form = new FormData();
        const date = new Date();
        const currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        const file = event.target.files[0];

        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            const blob = fileReader.result.split(",")[1];
            setPosts([{ postDescription: null, postImage: blob, createdAt: currentDate, likes: 0, hearts: 0, userEmail: email }, ...posts]);
        }


        form.append("post", `{
            "postDescription":null,
            "postImage":null,
            "createdAt":"${currentDate}",
            "likes":50,
            "hearts":60,
            "userEmail":"${email}"
        }`);
        form.append("image", file);

        axios.post(savePostApiUrl(), form)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }



    return (
        <Layout className='posts-layout'>
            <Card
                style={{

                    border: "1px solid #ececec",
                    boxShadow: "3px 3px 5px 1.5px lightgray",
                    borderRadius: 8
                }}
                className="what-on-mind-card"
            >
                <p style={{ color: "gray" }}><input style={{ border: "none", margin: 0, outline: "none" }} placeholder='Whats on your mind' id='whats-on-mind' onClick={handleWhatsOnYourMind} /></p>
                <Divider plain={true} />
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                    <div
                        style=
                        {{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            width: 80,
                            cursor: "pointer"
                        }}>

                        <PersonalVideoIcon style={{ width: 20, color: "red" }} /><Text style={{ fontWeight: 600 }}>Video</Text>

                    </div>
                    <label htmlFor='image-upload'><div
                        style=
                        {{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            width: 80,
                            cursor: "pointer"
                        }}>

                        <InsertPhotoIcon style={{ width: 20, color: "green" }} /><Text style={{ fontWeight: 600 }}>Photo</Text>


                    </div></label>
                    <input type="file" id='image-upload' onChange={onChooseFile} />
                    <div
                        style=
                        {{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            width: 120,
                            cursor: "pointer"
                        }}>

                        <EmojiEmotionsIcon style={{ width: 20, color: "gold" }} /><Text style={{ fontWeight: 600 }}>Feeling Activity</Text>

                    </div>
                </div>

            </Card>
            <Stories />
            {posts.length > 0 ?
                posts.map((post, index) => {
                    return (
                        <PostsFeed image={post.postImage} description={post.postDescription} creator={post.userEmail} createdDate={post.createdAt} likes={post.likes} hearts={post.hearts} video={post.video} key={index} />
                    );
                }) :
                (
                    <>
                        <Card
                            style={{

                                border: "1px solid #ececec",
                                boxShadow: "3px 3px 5px 1.5px lightgray",
                                borderRadius: 8,
                                display: "block",
                                marginTop: 60

                            }}
                            className="post-feed-card"
                            loading={loading}
                        ></Card>
                        <Card
                            style={{

                                border: "1px solid #ececec",
                                boxShadow: "3px 3px 5px 1.5px lightgray",
                                borderRadius: 8,
                                display: "block",
                                marginTop: 60

                            }}
                            className="post-feed-card"
                            loading={loading}
                        ></Card>
                        <Card
                            style={{

                                border: "1px solid #ececec",
                                boxShadow: "3px 3px 5px 1.5px lightgray",
                                borderRadius: 8,
                                display: "block",
                                marginTop: 60

                            }}
                            className="post-feed-card"
                            loading={loading}
                        ></Card>
                    </>
                )
            }

        </Layout>
    )
}

export default Posts