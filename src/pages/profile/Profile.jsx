import { Layout } from 'antd'
import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import User from '../../components/user/User';
import "./Profile.css"
function Profile() {
  return (
   <>
   
   <Header/>
   <Layout className='profile-pg-layout'>
   <Navbar/> 
   <User/>
   </Layout>
   </>
  )
}

export default Profile