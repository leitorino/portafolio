import React from 'react';
import ReactDOM from 'react-dom';
import Particula from './particulas.js';
import Header from './header.js';
import Footer from './footer.js';
import './styles/general.css';
import './styles/index.css';

var saludo = "Hola";
var identificacion ="Soy Alcides, Ingeniero en Computación";
var introduccion = "este es un mensaje de prueba para ver como va y no colocare lo anterior para que mi novia no diga nada :v";
var redes = JSON.parse('{"Facebook":"https://www.facebook.com/leon.alcides","Twitter":"https://twitter.com/alcidesleon","Instagram":"https://www.instagram.com/leitorino/","Linkedin":"https://www.linkedin.com/in/alcides-leon-a7495713b/"}');

class Index extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Particula saludo={saludo} identificacion={identificacion} introduccion={introduccion} />
                <Footer redes={redes}/>
            </div>
        );
    }
}

export default Index;