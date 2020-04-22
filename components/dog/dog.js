import React from "react"
import Dogs from "./dog.png"


const Dog =()=>{

    return(
        <div>
        <div className="slider_area">
        <div className="single_slider slider_bg_1 d-flex align-items-center">
            <div className="containerDOG">
                <div className="row">
                    <div className="col-lg-5 col-md-6">
                        <div className="slider_text">
                            <h3 style={{fontWeight:100}}>We Care  </h3>
                            <h3>  <span>Your Pets</span></h3>
                            <div>  <p>Lorem ipsum dolor sit amet</p></div>
                          
                           
                            
                            <a href="contact.html" class="boxed-btn4">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dog_thumb d-none d-lg-block">
                <img src={Dogs} alt="" className="imgDOG"/>
            </div>
        </div>
    </div>
    </div>
    )




  
}
 export default Dog