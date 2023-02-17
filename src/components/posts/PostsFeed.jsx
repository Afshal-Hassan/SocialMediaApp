import React, { useState } from 'react'
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./PostFeed.css"
import { getHoursDiffBetweenDates } from '../../utils/HourByDate';
import axios from 'axios';
import { updateLikes } from '../../apis/apiUrls';
import { useDispatch, useSelector } from 'react-redux';
import { updateHeartButtonTouched, updateLikeButtonTouched } from '../../redux/actions/ButtonTouched';




function PostsFeed(props) {

  const dispatch = useDispatch();
  const [posts, setPosts] = useState(props.post);
  const isButtonTouchedState = useSelector(state => state.updateButtonTouched);



  const computeLikes = (event,post) => {
  

    if(isButtonTouchedState.isLikeButtonTouched == true){
      event.currentTarget.style.color = "black"
      dispatch(updateLikeButtonTouched(false));
    }
    else{
      event.currentTarget.style.color = "#008ad3"
      dispatch(updateLikeButtonTouched(true));
    }


    if (isButtonTouchedState.isLikeButtonTouched) {
      setPosts({ ...posts, likes: post.likes });
      
      axios.put(updateLikes(post.postId), {
        likes:post.likes
      })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
    else {

      setPosts({ ...posts, likes: post.likes + 1 });

      axios.put(updateLikes(post.postId), {
        likes:post.likes + 1
      })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }

  }


  const computeHearts = (event,post) => {

    if(isButtonTouchedState.isHeartButtonTouched == true ){
      event.currentTarget.style.color = "black"
      dispatch(updateHeartButtonTouched(false))
    }
    else{

      event.currentTarget.style.color = "red"
      dispatch(updateHeartButtonTouched(true))
    }



    if (isButtonTouchedState.isHeartButtonTouched) {
      setPosts({ ...posts, hearts: post.hearts });
    }
    else {
      setPosts({ ...posts, hearts: post.hearts + 1 })
    }

  }

  var postCreator = posts.userEmail.split("@");

  postCreator = postCreator[0].charAt(0).toUpperCase() + postCreator[0].slice(1);

  postCreator = postCreator.replace(/[0-9]/g, '');
  
  const hour = Math.floor(getHoursDiffBetweenDates(new Date(posts.createdAt.replace("T", " ")), new Date("2023-01-27 10:25:00")));


  return (
    <Card
      style={{

        border: "1px solid #ececec",
        boxShadow: "3px 3px 5px 1.5px lightgray",
        borderRadius: 8,
        marginTop: 60

      }}
      className="post-feed-card "
    >
      <div className="post-content">
        <Meta
          title={postCreator}
          description={(hour < 24 && hour >= 1) ? `${hour}h` : `${posts.createdAt.split("T")[0]}`}
          style={{ boxSizing: "border-box" }}
        />
        <MoreVertIcon/>
      </div>

      <div
        style={{ height: "fit-content", border: "1px solid white", justifySelf:"center",width:"100%", marginTop: "1em", maxHeight: "410px" }}>
        {

          posts.postImage != null
            ?
            (
              !posts.postImage.includes("http") ? <img src={`data:image/png;base64,${posts.postImage}`} alt="image" style={{ width: "100%" }} />
                :
                <img src={`http://localhost:5000/${posts.postImage}`} alt="image" style={{ width: "100%" }} />
            )
            :
            (
              posts.video != null
                ?
                (
                  posts.video.includes("3000") ?
                    <video style={{ width: "100%", height: "100%", boxSizing: "border-box", borderRadius: 8 }} className="video" src={`${posts.video}`} autoPlay muted loop />
                    :
                    <video style={{ width: "100%", height: "100%", boxSizing: "border-box", borderRadius: 8 }} className="video" src={`http://localhost:5000/${posts.video}`} autoPlay muted loop />
                )
                : <h2 style={{ textAlign: "center" }}>{posts.postDescription}</h2>
            )}


      </div>
      <div style={{ marginTop: 10, marginBottom: 10, display: "flex", alignItems: "center" }}>
        {
          posts.likes > 0 && posts.hearts > 0 ?
            (
              <>
                <ThumbUpIcon style={{ width: 15, height: 15, color: "#008ad3", marginRight: 2 }} />
                <FavoriteIcon style={{ width: 15, height: 15, color: "red", marginRight: 5 }} />
                <span style={{ fontSize: 12, textAlign: "center", color: "gray", fontWeight: 640 }}>
                  {posts.likes + posts.hearts}</span>
              </>
            ) : null
        }

      </div>
      <div style={{ display: 'flex', flexDirection: "row", justifyContent: "flex-start", width: 100, marginLeft: 10 }}>

        <ThumbUpIcon style={{ marginTop: 12, marginRight: 13, cursor: "pointer",  }} onClick={(event) => computeLikes(event,props.post)} />
        <FavoriteIcon style={{ marginTop: 12, cursor: "pointer",  }} onClick={(event) => computeHearts(event,props.post)} />
      </div>

    </Card>
  )
}

export default PostsFeed