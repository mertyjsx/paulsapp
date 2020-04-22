import React from 'react';
import Dash from "../components/Saas/Dash"
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Videos from "../components/video/video"
import Banner from '../components/Saas/Banner';
import JoinCard from '../components/Saas/JoinCard';
import CtaCard from '../components/Saas/CtaCard';
import Partner from '../components/Saas/Partner';
import Platform from '../components/Saas/Platform';
import CaseStudy from '../components/Saas/CaseStudy';
import LoadBar from "../components/Saas/Loadbar"
import ClientFeedback from '../components/Saas/ClientFeedback';
import GalleryContent from '../components/Saas/GalleryContent';
import Imagıne from "../components/Saas/Imagine"
import Cards from "../components/Cards/cards"
import CardSecondary from "../components/cardSecondaryLayout/index"
class Index extends React.Component {
    render() {
        return (
            <React.Fragment>
               <Navbar />
               <Banner />
<Imagıne></Imagıne>
<Cards></Cards>
               
             
<Dash></Dash>
<Videos></Videos>
<Partner />

<CaseStudy></CaseStudy>
               <GalleryContent />
              
              
               <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
