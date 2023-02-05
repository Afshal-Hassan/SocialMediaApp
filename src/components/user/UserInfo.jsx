import { Card , Typography } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'
import "./UserInfo.css"

const { Title } = Typography;
const { Text } = Typography;
function UserInfo(props) {
  return (
    <Card className='user-info-card'>

        <Meta
        title="User Information"
        description={props.email}
        />
        <Title level={5}>City: <Text>Karachi</Text></Title>
        <Title level={5}>Relationship: <Text>Single</Text></Title>

    </Card>
  )
}

export default UserInfo