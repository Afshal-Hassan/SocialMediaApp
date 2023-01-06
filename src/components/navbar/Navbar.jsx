import React from 'react'
import { Layout, Menu,Button } from "antd";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import HelpIcon from '@mui/icons-material/Help';
import ArticleIcon from '@mui/icons-material/Article';
import FeedbackIcon from '@mui/icons-material/Feedback';
import "./Navbar.css"

function Navbar() {
    return (
  
        <Layout className='nav-layout'>
            <Menu className='nav-menu'
                items={[
                    { label: "Feed", icon: <RssFeedIcon /> },
                    { label: "Chat", icon: <ChatIcon /> },
                    { label: "Videos", icon: <OndemandVideoIcon /> },
                    { label: "Events", icon: <ChatIcon /> },
                    { label: "Questions", icon: <HelpIcon /> },
                    { label: "Courses", icon: <ArticleIcon /> },
                    { label: "Feedback", icon: <FeedbackIcon /> },
                ]
                }
            >
            </Menu>
            <Button style={{
                backgroundColor:"#F2F3F5", 
                width:120,
                marginLeft:50,
                marginTop:30,
                fontFamily:
                "Lato,Poppins,Muli,sans-serif",
                fontWeight:550}}
                className="hide-buttons"
                >Show More</Button>
        </Layout>
     
  
    )
}

export default Navbar