import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import { Layout } from 'antd'
import "./Home.css";

function Home() {
    

  return (
    <>
        <Header/>
        <Layout id='home-pg-layout'>
        <Navbar/> 
        <Posts/>
        </Layout>   
    </>
  )
}

export default Home