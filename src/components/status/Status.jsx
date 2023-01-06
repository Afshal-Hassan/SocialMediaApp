import { Card, Layout, Typography } from 'antd'
import Meta from 'antd/es/card/Meta';
import React from 'react'
import "./Status.css";
const { Title } = Typography;

function Status() {
    return (
        <Layout className='status-layout'>
            <Card style={{ height: "100%" }}>
                <Meta
                    title="Online Friends"
                    style={{marginBottom:10}}
                />

                <div
                    style=
                    {{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: "0.3em",
                    }}>
                    <Title level={5}>Arham</Title>
                </div>
                <div
                    style=
                    {{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: "0.3em",
                    }}> <Title level={5}>Sherial</Title></div>
                <div
                    style=
                    {{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: "0.3em",
                    }}>  <Title level={5}>Anfal</Title></div>
                <div
                    style=
                    {{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: "0.3em",
                    }}>   <Title level={5}>Asad</Title></div>
                <div
                    style=
                    {{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: "0.3em",
                    }}> <Title level={5}>Test</Title></div>
                <div
                    style=
                    {{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: "0.3em",
                    }}> <Title level={5}>Test</Title></div>

            </Card>
        </Layout>
    )
}

export default Status