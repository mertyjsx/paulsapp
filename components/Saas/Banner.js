import React from 'react';
import Link from 'next/link';
import {Button} from "@material-ui/core"
import { FaWindows, FaApple, FaFacebook ,FaCheck} from "react-icons/fa"
import { Row, Col } from "react-bootstrap"
import img1 from "../../assets/images/1.png"
import img2 from "../../assets/images/2.png"
import img3 from "../../assets/images/3.png"
import img4 from "../../assets/images/4.png"
import img5 from "../../assets/images/5.png"
import img6 from "../../assets/images/6.png"
import mainimg from "../../assets/images/banner.png"
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

class Banner extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 20,
            mobile: true,
            live: true,
        }).init();
    }

    render() {
        return (
            <React.Fragment>
                <div className="main-banner saas-home bigscreen2" >
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container bigscreen">
                                <Row className="television">


                                    <Col sm={12} md={12} lg={6} >
                                        <div className="hero-content pl-4 ">
                                            <h1 className="response2">Anything Is Possible With Imagine Digital Signage Software</h1>
                                
                                            <p>Take control of your screens! It’s easy to install and even easier to manage. Try Imagine for free today.</p>
                                            <div className="flexcontainerrow" style={{justifyContent:"start"}}>

                                            <div style={{margin:10,  padding: "auto", fontSize: 30 }}><FaFacebook style={{color:"#4267B2"}}></FaFacebook></div>
                                                <div style={{margin:10, padding: "auto", fontSize: 30 }}><FaWindows style={{color:"#0177D7"}}></FaWindows></div>
                                                <div style={{ margin:10, padding: "auto", fontSize: 30,alignItems:"center",display:"flex" }}><FaApple></FaApple></div>


                                            </div>
                                         
                                            <div className={"flexcontainerrow" } style={{justifyContent:"start",marginTop:20,marginBottom:20}}>
                                         
                                               
                                                <Link href="/signup/">
                                                <Button variant="contained" style={{backgroundColor:"#FB6520",color:"white",marginRight:30}} size="large">
                         <div style={{display:"flex",flexDirection:"column"}}>

                         <div>START TRIAL</div>


                         </div>
                    
                         </Button>         
                    
                                              
                                                </Link>
                                                <Link href="/signup/">
                                                <Button variant="contained" style={{backgroundColor:"#FB6520",color:"white"}} size="large">
                         <div style={{display:"flex",flexDirection:"column"}}>

                         <div>BOOM DEMO</div>


                         </div>
                    
                         </Button>         
                    
                                              
                                                </Link>
                                       
                                        </div>
                                        <div className="flexcontainerrow" style={{justifyContent:"start"}}>
                                             <div className="flexcontainerrow" style={{justifyContent:"start"}}> <FaCheck style={{margin:4,alignItems:"center", fontSize: 13 }}></FaCheck>
                                             
                                             <div style={{fontSize:13}}>14-day free trial</div>
                                             </div>
                                             <div className="flexcontainerrow" style={{justifyContent:"start"}}> 
                                             <FaCheck style={{margin:4,alignItems:"center", fontSize: 13 }}></FaCheck>
                                             <div style={{fontSize:13}}>No credit card</div>
                                             </div>
                                             <div className="flexcontainerrow" style={{justifyContent:"start"}}>  <FaCheck style={{margin:4,alignItems:"center", fontSize: 13 }}></FaCheck>
                                             <div style={{fontSize:13}}>No contracts</div>
                                             </div>
                                             </div>      

                                            </div>
                                    </Col>
                                    <Col sm={12} md={12} lg={6} style={{ marginBottom: 50 }}>
                                        <div >
                                            <img
                                                src={mainimg}
                                                className="wow zoomIn"
                                                data-wow-delay="0.6s"
                                                alt="home hero"

                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: 120, marginBottom: 100 }} style={{ width: "100%", margin: "0 auto", textAlign: "center", marginTop: 50 }}>
                                    <Col lg={2} md={4} sm={4}  xs={4}>
                                        <div style={{ margin: 10, padding: "auto", fontSize: 50 }}><img src={img1} alt=""></img></div>


                                    </Col>

                                    <Col lg={2} md={4} sm={4}  xs={4}>
                                        <div style={{ margin: 10, padding: "auto", fontSize: 50 }}><img src={img2} alt=""></img></div>

                                    </Col>

                                    <Col lg={2} md={4} sm={4}  xs={4}>
                                        <div style={{ margin: 10, padding: "auto", fontSize: 50 }}><img src={img3} alt=""></img></div>

                                    </Col>

                                    <Col lg={2} md={4} sm={4}  xs={4}>

                                        <div style={{ margin: 10, padding: "auto", fontSize: 50 }}><img src={img4} alt=""></img></div>
                                    </Col>
                                    <Col lg={2} md={4} sm={4} xs={4} >

                                        <div style={{ margin: 10, padding: "auto", fontSize: 50 }}><img src={img5} alt=""></img></div>
                                    </Col>
                                    <Col lg={2} md={4} sm={4}  xs={4}>

                                        <div style={{ margin: 10, padding: "auto", fontSize: 50 }}><img src={img6} alt=""></img></div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div >
                </div >
            </React.Fragment >
        );
    }
}

export default Banner;
