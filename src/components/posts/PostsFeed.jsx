import React from 'react'
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./PostFeed.css"
function PostsFeed() {
  return (
    <Card 
    style={{
      
        border:"1px solid #ececec", 
        boxShadow:"3px 3px 5px 1.5px lightgray",
        borderRadius:8,
        display:"block",
        marginTop:60
        
    }}
    className="post-feed-card"
   
    >
        <div style={{ display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
      <Meta 
      title="Afshal"
      description="5h"
      style={{boxSizing:"border-box"}}
      />
        <MoreVertIcon/>
      </div>
      <div 
      style={{height:"25em", border:"1px solid red",justifySelf:"center",marginTop:"1em"}}>

      </div>
    <div style={{display :'flex' , flexDirection:"row",justifyContent:"space-evenly",width:100}}>
        <ThumbUpIcon style={{marginTop:10,cursor:"pointer"}}/>
        <FavoriteIcon style={{marginTop:10,cursor:"pointer"}}/>
        </div>  
       
    </Card>
  )
}

export default PostsFeed