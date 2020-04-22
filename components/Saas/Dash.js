import React from "react"

import { FaChrome } from "react-icons/fa"
import { FaApple } from "react-icons/fa"
import { FaWindows } from "react-icons/fa"
import dog from "../../assets/images/dashboard.png"
import dash2 from "../../assets/images/dash2.png"
import dash3 from "../../assets/images/dash3.png"
import { FaCheck,FaHospital,FaShoppingBag ,} from "react-icons/fa"
import { Row,Col } from "react-bootstrap"
import {Button} from "@material-ui/core"
import logo1 from "../../assets/images/Windows.svg"
import logo2 from "../../assets/images/LGlogo.svg"
import logo3 from "../../assets/images/Android.svg"
import logo4 from "../../assets/images/Linux.svg"
const Dash = () => {



    return (
        <div style={{ marginBottom:100}} className="container">
            <Row style={{marginTop:100}}>
                <Col md={12} lg={6} >
                    <img src={dog} alt=""></img>
                </Col>
                <Col md={12} lg={6}  style={{justifyContent:"center" , alignContent:"center"}}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <h2 className="settitle" style={{textAlign:"start",paddingRight:20,paddingLeft:20,fontSize:"2rem"}}>Get Started With Your Own Dash Board</h2>

                </div>
                  
                    <Row style={{display:"flex",justifyContent:"center",alignItems:"center",}}>

                     
                        <Col ><p className="setp" style={{color:"black",paddingRight:20,paddingLeft:20,alignItems:"center"}}>Registering for your online dashboard takes seconds and is the first step to controlling your displays.
 </p></Col>

                    </Row>
                    <Row style={{flexDirection:"column",justifyContent:"center",padding:"auto"}}>
                    <Row   style={{marginTop: 20 ,justifyContent:"start" , alignContent:"center",paddingRight:30,paddingLeft:55}}>

                        <Col xs={1} style={{justifyContent:"center" , alignContent:"center"}}>


                            <FaChrome style={{ alignItems:"center", fontSize: 13}}></FaChrome>

                        </Col>
                        <Col xs={8} style={{display:"flex", alignItems:"center"}} className={"apart"}><p>Login from anywhere in the world
</p></Col>

                    </Row>
                    <Row style={{ marginTop: -13,justifyContent:"start" , alignContent:"center",paddingRight:30,paddingLeft:55}}>

                        <Col xs={1} style={{justifyContent:"center" , alignContent:"center"}}>

                            <FaWindows style={{alignItems:"center", fontSize: 13,height:"100%" }}></FaWindows>

                        </Col>
                        <Col  xs={8} style={{display:"flex", alignItems:"center"}} className={"apart"}><p>Manage your subscriptions
</p></Col>

                    </Row>
                    <Row style={{ marginTop: -13,justifyContent:"start" , alignContent:"center",paddingRight:30,paddingLeft:55}}>

<Col xs={1} style={{justifyContent:"center" , alignContent:"center"}}>

    <FaWindows style={{alignItems:"center", fontSize: 13,height:"100%" }}></FaWindows>

</Col>
<Col  xs={8} style={{display:"flex", alignItems:"center"}}>
                    <p>Monitor display your content</p></Col>

</Row>
                    </Row>
<div className="flexcontainer " style={{paddingLeft:55,justifyContent:"start",marginTop:20}}>
<Button variant="contained" style={{backgroundColor:"#FB6520",color:"white"}} size="large">
                         Register

                         </Button>  
</div>
                    

                </Col>


           
            </Row>
            <Row style={{marginTop:100}} className="television">
            <Col md={12} lg={6}  style={{justifyContent:"center" , alignContent:"center"}}>
            <Row style={{display:"flex",justifyContent:"center",alignItems:"center",}}>
            <Col >
                <h2 className="settitle" style={{textAlign:"start",paddingRight:20,paddingLeft:20,fontSize:"2rem"}}>Install the Imagine player and register your screens</h2>
                </Col>
                </Row>
                
                   
                        <p style={{paddingRight:20,paddingLeft:20,alignItems:"center"}}>Once installed link each player to your newly created online dashboard 
></p>
                    

                  
                   
                    



                       
                        <p style={{paddingRight:20,paddingLeft:20,alignItems:"center",}}>The Imagine player seamlessly displays your media  on all sizes of and types of displays. Its easy to setup, compatible with all resolutions and available for download on 4 different operating systems. 
</p>

                    
                    <Row style={{ marginTop: 22 ,paddingRight:20,paddingLeft:20,justifyContent:"center"}}>
                    <Col lg={4} md={4} style={{justifyContent:"start",alignItems:"center",paddingTop:20,paddingLeft:20}}> 
                    <Button variant="contained" style={{backgroundColor:"#FB6520",color:"white",justifyContent:"start"}} size="large">
                         Register

                         </Button>         
                    
                    </Col>
   <Col lg={8} md={8}  >
       <Row>
<Col xs={4} style={{display:"flex",justifyContent:"start",alignItems:"center",width:20,}}>  <img src={logo1} style={{width:"100%" }}></img></Col>
<Col xs={4} style={{display:"flex",justifyContent:"start",alignItems:"center",width:20}}>  <img src={logo2} style={{width:"100%" }}></img></Col>
<Col xs={2} style={{display:"flex",justifyContent:"start",alignItems:"center",width:20}}>   <img src={logo3} style={{width:"100%" }}></img></Col>
<Col xs={2} style={{display:"flex",justifyContent:"start",alignItems:"center",width:20}}>  <img src={logo4} style={{width:"100%" }}></img></Col>
                           
</Row>          
</Col>
                  
                    </Row>
                
                </Col>
                <Col md={12} lg={6} style={{justifyContent:"center",display:"flex"}}>
                <img src={dash2} alt=""></img>

                </Col>


            </Row>
            <Row style={{marginTop:100}}>
                <Col md={12} lg={6}  >
                    <img src={dash3} alt=""></img>
                </Col>
                <Col md={12} lg={6} >
                <div style={{ display:"flex",justifyContent:"center",alignItems:"center"}}>
                <h2 className="settitle"style={{textAlign:"start",paddingRight:20,paddingLeft:20,fontSize:"2rem"}}>Manage 1 or 1000’s of screens – It’s that easy
</h2>

                </div>
                  

                      
                        <p style={{paddingRight:20,paddingLeft:20,alignItems:"center"}}>Imagine was built for the end users inspired and by industries needs for an easy to use reliable application with instant communication.
 </p>
                <Row style={{justifyContent:"center",flexDirection:"column"}}>
                    <Row style={{ marginTop: 10,justifyContent:"center"}}>

                        <Col xs={1}>


                            <FaShoppingBag style={{alignItems:"center", fontSize: 13 }}></FaShoppingBag>

                        </Col>
                        <Col xs={3} style={{alignItems:"center", display:"flex"}}><p  >Retail
</p></Col>
<Col xs={1}>


<FaHospital style={{alignItems:"center", fontSize: 13 }}></FaHospital>

</Col>
<Col xs={3} style={{alignItems:"center", display:"flex"}}><p  >Hospitality
</p></Col>

                    </Row>
                    <Row style={{ marginTop: 10,justifyContent:"center"}}>

                    <Col xs={1}>


<FaCheck style={{alignItems:"center", fontSize: 13 }}></FaCheck>

</Col>
<Col xs={3} style={{alignItems:"center", display:"flex"}}><p  >Restaurants
</p></Col>
<Col xs={1}>


<FaCheck style={{alignItems:"center", fontSize: 13 }}></FaCheck>

</Col>
<Col xs={3} style={{alignItems:"center", display:"flex"}}><p  >Healthcare
</p></Col>

                    </Row>
                    <Row style={{ marginTop: 10,justifyContent:"center" }}>

                    <Col xs={1}>


<FaCheck style={{alignItems:"center", fontSize: 13 }}></FaCheck>

</Col>
<Col xs={3} style={{alignItems:"center", display:"flex"}}><p  >Education
</p></Col>
<Col xs={1}>


<FaCheck style={{alignItems:"center", fontSize: 13 }}></FaCheck>

</Col>
<Col xs={3} style={{alignItems:"center", display:"flex"}}><p  >Gambling
</p></Col>







</Row>
<Row style={{ marginTop: 10,justifyContent:"center"}}>

<Col xs={1}>


<FaCheck style={{alignItems:"center", fontSize: 13 }}></FaCheck>

</Col>
<Col xs={3} style={{alignItems:"center", display:"flex"}}><p  >Corparate
</p></Col>
<Col xs={1}>


<FaCheck style={{alignItems:"center", fontSize: 13 }}></FaCheck>

</Col>
<Col xs={3} style={{alignItems:"center", display:"flex"}}><p  >Outdoor
</p></Col>







</Row>

</Row>   

        
<div style={{width:"100%", display:"flex",alignItems:"center",marginTop:30,paddingLeft:50}}>
                  
                  <Button variant="contained" style={{backgroundColor:"#FB6520",color:"white"}} size="large">
               Register
               </Button>
          </div>
                    

                </Col>


            </Row>
           
        </div>
    )
}
export default Dash