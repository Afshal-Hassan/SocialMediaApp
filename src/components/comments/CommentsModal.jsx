import React from 'react'
import { Modal, Card } from 'antd'
import ProfilePic from "../user/Profile.jpeg"
import Typography from 'antd/es/typography/Typography'
import CloseIcon from '@mui/icons-material/Close';
import { useCommentsModal } from '../../hooks/context/CommentsModal';


const { Title } = Typography;
const { Text } = Typography;


function CommentsModal() {

    const[openCommentsModal, setOpenCommentsModal] = useCommentsModal();


    const handleSetCloseCommentsModal = () => {
        setOpenCommentsModal(false);
    }
    


    return (
        <Modal open={openCommentsModal } footer={null} maskStyle={{backgroundColor:"#F2F3F5"}}  closable={false} style=
            {{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:"transparent",
                width:700
            }}
        >
            <Card
                style=
                {{
                    border: "1px solid #ececec",
                    borderRadius: 8,
                    width: 600,
                    height: 500

                }}
            >
                <div style=
                    {{
                        display: "flex",
                        alignItems: "center",

                    }}>
                    <img src={ProfilePic} style=
                        {{
                            width: 28,
                            height: 28,
                            borderRadius: "100%"
                        }} />
                    <div
                        style=
                        {{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            backgroundColor: "#F2F3F5",
                            paddingRight: 10,
                            paddingLeft: 10,
                            marginTop: 0,
                            height: "fit-content",
                            width: 100,
                            marginLeft: 5,
                            paddingBottom: 8,
                            borderRadius: 10
                        }}
                    >
                        <Title level={5} style=
                            {{
                                textAlign: "center",
                                fontSize: 13
                            }}>
                            Afshal Hassan
                        </Title>
                        <Text
                            style=
                            {{
                                fontSize: 12,
                                marginTop: 1,
                                fontWeight: 500
                            }}>
                            Hello
                        </Text>

                    </div>
                </div>
                <CloseIcon
                style=
                {{
                    position:"absolute",
                    right:5,
                    top:3,
                    cursor:"pointer"
                }}
                onClick={handleSetCloseCommentsModal}
                />
            </Card>
        </Modal>
    )
}

export default CommentsModal