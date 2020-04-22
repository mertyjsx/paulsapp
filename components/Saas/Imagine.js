import React from "react"
import { FaWindows, FaApple, FaFacebook, FaHeadphones, FaBookOpen, FaMailchimp } from "react-icons/fa"
import Manage from "../../assets/images/manage.svg"
import { Row, Col } from "react-bootstrap"
import Monitor from "../../assets/images/monitor.svg"
import Analyse from "../../assets/images/analyse.svg"
import Schedule from "../../assets/images/schedule.svg"
import Create from "../../assets/images/create.svg"
import Customise from "../../assets/images/customise.svg"
const Imagıne = () => {

    return (
        <div style={{backgroundColor:"#f0f3f5"}} className="backg">
        <div className="hero-content container imagines" >
            <div style={{ width: "80%", margin: "0 auto", textAlign: "center", marginTop: 50 }}><h2 className={"response"}>Imagine a Platform That Does it All</h2></div>


            <Row style={{ width: "80%", margin: "0 auto", textAlign: "center", marginTop: 50 }}>
                <Col sm={4} md={4} lg={2}  xs={4} >
                    <div style={{ margin: 10, padding: "auto", fontSize: 70, justifyContent: "center", display: "flex" }} className="justify-content-center align-items-center"><img src={Manage}></img></div>
                    <p style={{color:"black",textAlign:"center"}}>Manage</p>

                </Col>

                <Col sm={4} md={4} lg={2}  xs={4}>
                    <div style={{ margin: 10, padding: "auto", fontSize: 70, display: "flex", justifyContent: "center" }} ><img src={Monitor}></img></div>
                    <p style={{color:"black",paddingTop:12,textAlign:"center"}}>Monitor</p>
                </Col>

                <Col sm={4} md={4} lg={2}  xs={4}>
                    <div style={{ margin: 10, padding: "auto", fontSize: 70, justifyContent: "center", display: "flex" }} className="justify-content-center align-items-center"><img src={Create}></img></div>
                    <p style={{color:"black",marginTop:5,textAlign:"center"}}>Create</p>
                </Col>
                <Col sm={4} md={4} lg={2}  xs={4}>
                    <div style={{ margin: 10, padding: "auto", fontSize: 70, justifyContent: "center", display: "flex" }} className="justify-content-center align-items-center"><img src={Schedule}></img></div>
<p style={{color:"black",textAlign:"center",paddingTop:12}}>Schedule</p>
                </Col>

                <Col sm={4} md={4} lg={2}  xs={4}>
                    <div style={{ margin: 10, padding: "auto", fontSize: 70, justifyContent: "center", display: "flex" }} className="justify-content-center align-items-center"><img src={Analyse}></img></div>
                    <p style={{color:"black",marginTop:5,textAlign:"center"}}>Analyse</p>
                </Col>
                <Col sm={4} md={4} lg={2}  xs={4}>

                    <div style={{ margin: 10, padding: "auto", fontSize: 70, justifyContent: "center", display: "flex" }} className="justify-content-center align-items-center"><img src={Customise}></img></div>
                    <p style={{color:"black",textAlign:"center"}}>Scale</p>
                </Col>

            </Row>
            <div style={{ width: "80%", margin: "0 auto", textAlign: "center", marginTop: 50 }}><p style={{ color: "black" }}>Effectively managing thousands of screens and trusted by businesses from around South Africa and the rest of the world. Imagine is a simple and reliable tool to manage your screens content remotely. Offering tools like a comprehensive dashboard, designer and scheduler with an easy to use interface
</p></div>

        </div>
        </div>    )
}


export default Imagıne