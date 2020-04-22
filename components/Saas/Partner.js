import React from 'react';
import Link from 'next/link';
import {Button} from "@material-ui/core"
import LoadBar from "./Loadbar"
import dynamic from 'next/dynamic';
import imaged from "../../assets/images/widgets.png"
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    autoplay: true,
    nav: false,
    mouseDrag: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: false,
    loop: true,
    navText: [
    "<i class='icofont-bubble-left'></i>",
    "<i class='icofont-bubble-right'></i>"
    ],
    responsive:{
        0:{
            items:2,
        },
        768:{
            items:3,
        },
        1024:{
            items:4,
        },
        1200:{
            items:4,
        }
    }
}

class Partner extends React.Component {
    state = { display:false};


    componentDidMount(){ 
        this.setState({ display: true }) 
    }
    render() {
        return (
            <div className="partner-area partner-area-pt100">
                <div className="container ptb-100 pt-0">
                   

                    <div className="row h-100 justify-content-center align-items-center">


                        <div >
                            <div style={{width: "100%",display:"flex",justifyContent:"center"}}>
                                <img src={imaged} alt="image" style={{width: "65%"}} className="lazyload" />
                            </div>
                        </div>
                        
                        <div style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                            <h3 className="pb-3" style={{fontSize:"2rem",margin:40}} >Informative, educational, functional and entertaining content widgets.</h3>
                            <p>Boost your content loop with our awesome content widget partners. Select from a range of free news, social and informational feeds, or shop from our premium store for flight arrivals and specialized feeds.</p>
                            <Link href="/widgets" >
                            <Button variant="contained" style={{backgroundColor:"#FB6520",color:"white",marginTop:50}}>
                         See Our Widgets
                         </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor:"#f0f3f5",paddingTop:100,paddingBottom:100}}>
                <div className="container" >
                    <div className="section-title">
                        <h2 style={{color:"black"}}>We have helped 2000+ locations find the true power of digital signage</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="row">
                    {this.state.display ? <OwlCarousel 
                            className="partner-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12">
                                <div className="item item-partner">
                                    <Link>
                                        <a><img src={require('../../images/partner/partner-1-sm.png')} alt="partner" /></a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="item item-partner">
                                    <Link>
                                        <a><img src={require('../../images/partner/partner-2-sm.jpg')} alt="partner" /></a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="item item-partner">
                                    <Link>
                                        <a><img src={require('../../images/partner/partner-3-sm.jpg')} alt="partner" /></a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="item item-partner">
                                    <Link>
                                        <a><img src={require('../../images/partner/partner-4-sm.jpg')} alt="partner" /></a>
                                    </Link>
                                </div>
                            </div>
                           
                        </OwlCarousel> : ''}
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Partner;
