import React from 'react';
import Info from './info.js';
import Header from './header.js';
import Footer from './footer.js';
import './styles/general.css';

class About extends React.Component {

    render() {
        return(
            <div className="fondo-2">
                <Header />
                <Info />
                <Footer type="normal"/>
            </div>
        );
    }
}

export default About;
