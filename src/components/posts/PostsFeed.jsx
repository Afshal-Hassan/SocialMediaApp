import React from 'react'
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./PostFeed.css"
import { getHoursDiffBetweenDates } from '../../utils/HourByDate';




function PostsFeed(props) {
  // let blobBackend="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"
  // let blob = "data:image/png;base64,"+blobBackend


  var postCreator = props.creator.split("@");
  postCreator = postCreator[0].charAt(0).toUpperCase() + postCreator[0].slice(1);
  const hour = Math.floor(getHoursDiffBetweenDates(new Date(props.createdDate.replace("T", " ")), new Date("2023-01-27 10:25:00")));



  return (
    <Card
      style={{

        border: "1px solid #ececec",
        boxShadow: "3px 3px 5px 1.5px lightgray",
        borderRadius: 8,
        display: "block",
        marginTop: 60

      }}
      className="post-feed-card"
    >
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <Meta
          title={postCreator}
          description={(hour < 24 && hour >= 1) ? `${hour}h` : `${props.createdDate.split("T")[0]}`}
          style={{ boxSizing: "border-box" }}
        />
        <MoreVertIcon />
      </div>

      <div
        style={{ height: "fit-content", border: "1px solid white", justifySelf: "center", marginTop: "1em", maxHeight: "410px" }}>
        {
        
        props.image != null 
          ?
          (
              !props.image.includes("http") ? <img src={`data:image/png;base64,${props.image}`} alt="image" style={{ width: "100%"}} />
              :
              <img src={`http://localhost:5000/${props.image}`} alt="image" style={{ width: "100%" }} />
          )
          :
          (
            props.video != null 
            ?
              (
                props.video.includes("3000") ?
                  <video style={{ width: "100%", height: "100%", boxSizing: "border-box", borderRadius: 8 }} className="video" src={`${props.video}`} autoPlay muted loop />
                  :
                  <video style={{ width: "100%", height: "100%", boxSizing: "border-box", borderRadius: 8 }} className="video" src={`http://localhost:5000/${props.video}`} autoPlay muted loop />
              )
            : <h2 style={{ textAlign: "center" }}>{props.description}</h2>
          )}


      </div>
      <div style={{ marginTop: 10, marginBottom: 10, display: "flex", alignItems: "center" }}>
        {
          props.likes > 0 && props.hearts > 0 ?
            (
              <>
                <ThumbUpIcon style={{ width: 15, height: 15, color: "#008ad3", marginRight: 2 }} />
                <FavoriteIcon style={{ width: 15, height: 15, color: "red", marginRight: 5 }} />
                <span style={{ fontSize: 12, textAlign: "center", color: "gray", fontWeight: 640 }}>
                  {props.likes + props.hearts}</span>
              </>
            ) : null
        }

      </div>
      <div style={{ display: 'flex', flexDirection: "row", justifyContent: "flex-start", width: 100, marginLeft: 10 }}>

        <ThumbUpIcon style={{ marginTop: 10, marginRight: 13, cursor: "pointer" }} />
        <FavoriteIcon style={{ marginTop: 10, cursor: "pointer" }} />
      </div>

    </Card>
  )
}

export default PostsFeed