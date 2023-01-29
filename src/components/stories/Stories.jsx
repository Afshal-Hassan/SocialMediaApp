import { Box } from '@mui/system';
import Modal from 'antd/es/modal/Modal';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import "./Stories.css";


function Stories() {
    const [isModalOpen , setModalOpen] = useState(false);

    let videoRef = useRef(null);

    const playVideo = () => {
        videoRef.current.play();
    }
    const pauseVideo = () => {
        videoRef.current.pause();
        videoRef=null;
    }
    const openStoriesModal = () => {
        setModalOpen(true);
        setTimeout(() => {
            playVideo();
        },500);
    }

    const closeStoriesModal = () => {
        
        setTimeout(() => {
            setModalOpen(false);
        },300);

        setTimeout(() => {
            pauseVideo();
        },550);
               
    }

   console.log(videoRef);
    useEffect(()=>{

    },[]);

    return (
        <div
        style={{display:"flex" , flexDirection:"row" , alignItems:"center",width:"100%",marginTop: 20,}}
        >
            <div
                style={{
                    width: "10em",
                    height: "15em",
                    borderRadius: 8,
                    boxShadow: "3px 3px 5px 1.5px lightgray",
                    
                    marginLeft:10,
                    marginRight:25,
                    position:"relative"
                }}
                className="video-component"
                onClick={openStoriesModal}
            >
                <video style={{ width: "100%", height: "100%", boxSizing: "border-box", borderRadius: 8 }} className="video" src={"http://localhost:5000/videos/c7b01bab-3eb3-42aa-ba87-79ae4997d2de.mp4"} autoPlay muted loop />
            <span style={{position:"absolute",left:"37%",top:"87%",color:"whitesmoke",fontWeight:600,fontSize:13.5}} className="video-title">Audi Lifestyle</span>
            <Modal open={isModalOpen} footer={null} closable={false}  className="ant-modal-content">
                    <div className='modal-box' onClick={closeStoriesModal}>
                   <Box>
                    <video style={{ width: "100%", height: "100%", boxSizing: "border-box", borderRadius: 8 }}  src={"http://localhost:5000/videos/c7b01bab-3eb3-42aa-ba87-79ae4997d2de.mp4"} ref={videoRef} controls  />
                    </Box>
                    </div>
                </Modal>
            </div>
            <div
                style={{
                    width: "10em",
                    height: "15em",
                    borderRadius: 8,
                    boxShadow: "3px 3px 5px 1.5px lightgray",
                    position:"relative"
                }}
                className="video-component"
                onClick={openStoriesModal}
            >
                <video style={{ width: "100%", height: "100%", boxSizing: "border-box", borderRadius: 8 }} className="video" src={"http://localhost:5000/videos/c7b01bab-3eb3-42aa-ba87-79ae4997d2de.mp4"} autoPlay muted loop />
                <span style={{position:"absolute",left:"37%",top:"87%",color:"whitesmoke",fontWeight:600,fontSize:13.5}} className="video-title">Audi Lifestyle</span>
                <Modal open={isModalOpen} footer={null} closable={false}  className="ant-modal-content">
                    <div className='modal-box' onClick={closeStoriesModal}>
                   <Box>
                    <video style={{ width: "100%", height: "100%", boxSizing: "border-box", borderRadius: 8 }}  src={"http://localhost:5000/videos/c7b01bab-3eb3-42aa-ba87-79ae4997d2de.mp4"} ref={videoRef} controls  />
                    </Box>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default Stories;