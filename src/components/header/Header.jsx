import React from 'react'
import { Layout, Typography,Input } from 'antd'
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

import "./Header.css";

const { Title } = Typography;
const { Search } = Input;
function Header() {
    return (
        <Layout className='header-layout'>
            <Title
                level={2}
                style=
                {{ 
                    marginBottom: "0.8em",
                    fontFamily:"Lato,Poppins,Muli,sans-serif",
                    color:"#008ad3",
                    fontWeight:"bolder"
                }}
                id="title-header"
            >facebook</Title>
        <Search 
        style={{width:"20em"}}
        allowClear
        placeholder="Search"
        enterButton
        className="search-bar"
        />
        <div id='icons-layout'>
            <PersonIcon 
            style={{
            color:"black",
            backgroundColor:"#F2F3F5",
            borderRadius:"100%",
            padding:"3px",
            width:31,
            height:31,
            cursor:"pointer"
            }}/>
            <NotificationsIcon 
            style={{
                color:"black",
                backgroundColor:"#F2F3F5",
                borderRadius:"100%",
                padding:"3px",
                width:31,
                height:31,
                cursor:"pointer"
                }}/>
            </div>
        </Layout>
    )
}

export default Header