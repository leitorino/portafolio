import React from 'react';
import ReactDOM from 'react-dom';
import Particula from './particulas.js';
import Header from './header.js';
import Footer from './footer.js';
import './styles/general.css';
import './styles/index.css';

class Index extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Particula />
                <Footer type="bootstrap"/>
            </div>
        );
    }
}

export default Index;