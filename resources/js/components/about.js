import React from 'react';
import Info from './info.js';
import Header from './header.js';
import Footer from './footer.js';
import './styles/general.css';

var redes = JSON.parse('{"Facebook":"https://www.facebook.com/leon.alcides","Twitter":"https://twitter.com/alcidesleon","Instagram":"https://www.instagram.com/leitorino/","Linkedin":"https://www.linkedin.com/in/alcides-leon-a7495713b/"}');

class About extends React.Component {

    render() {
        return(
            <div className="fondo-2">
                <Header />
                <Info />
                <Footer redes={redes}/>
            </div>
        );
    }
}

export default About;
