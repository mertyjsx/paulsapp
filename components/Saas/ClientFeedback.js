import React, { Component } from 'react';

// import 'lazysizes';
// // import a plugin
// import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class ClientFeedback extends Component {

    render() {
        return (
          
                <div className="section-title">
                    <h2>“Simple, yet so effective. Very surprised how easy it was to use!”</h2>
                    <div className="bar"></div>
                    <p><img data-src={require('../../images/team-img1.jpg')} alt="client avatar" className="client-avatar lazyload" /> &nbsp;&nbsp;Guy | Owner, Petworld – South Africa</p>
                </div>
        
        );
    }
}

export default ClientFeedback;
