import React from "react"



const Bar =({title,title2,h2,p})=>{



    return(





<div className="container" style={{marginTop:100}}>
<div style={{display:"flex", justifyContent:"center",textAlign:"center",flexDirection:"column"}}>                   

    <h1 style={{color:"black", fontSize:"2rem"}}>{title}</h1>
    <h1 style={{color:"black",fontSize:"2rem"}}> {h2}</h1>

                    <div className="bar"></div>
               
               
  </div>
<div style={{display:"flex", justifyContent:"center",textAlign:"center"}}>                   
                   
    <p style={{color:"black"}}>{p}</p>
               
               
                </div>


</div>



    )
}


export default Bar