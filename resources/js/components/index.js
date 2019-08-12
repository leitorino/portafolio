import React from 'react';
import ReactDOM from 'react-dom';
import Particula from './particulas.js';
import Header from './header.js';
import Footer from './footer.js';
import './styles/general.css';
import './styles/index.css';

var redes = JSON.parse('{"Facebook":"https://www.facebook.com/leon.alcides","Twitter":"https://twitter.com/alcidesleon","Instagram":"https://www.instagram.com/leitorino/","Linkedin":"https://www.linkedin.com/in/alcides-leon-a7495713b/"}');

class Index extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Particula />
                <Footer redes={redes}/>
            </div>
        );
    }
}

export default Index;