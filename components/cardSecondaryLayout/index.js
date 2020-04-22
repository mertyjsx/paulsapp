import React from "react"
import Card from "../Saas/cardSecondary"
import { Col, Row } from "react-bootstrap"
import {FaApple} from "react-icons/fa"
const CardS=()=>{

    return(
<div className="container">
        <Row style={{marginTop:100}}>



<Col lg={4} md={12} sm={12} style={ {marginTop:50}} >
    <Card icon={FaApple}></Card>
</Col>

<Col lg={4} md={12} sm={12} style={ {marginTop:50}} >
    <Card icon={FaApple}></Card>
</Col>
<Col lg={4} md={12} sm={12} style={ {marginTop:50}} >
    <Card icon={FaApple}></Card>
</Col>

        </Row>

        </div>
    )
}

export default CardS