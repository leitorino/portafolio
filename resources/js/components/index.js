import React from 'react';
import ReactDOM from 'react-dom';
import Particula from './particulas.js';

var saludo = "Hola";
var identificacion ="Soy Alcides, Ingeniero en Computación";
var mensaje = "este es un mensaje de prueba para ver como va y no colocare lo anterior para que mi novia no diga nada :v";
var redes = JSON.parse('{"Facebook":"https://www.facebook.com/leon.alcides","Twitter":"https://twitter.com/alcidesleon","Instagram":"https://www.instagram.com/leitorino/","Linkedin":"https://www.linkedin.com/in/alcides-leon-a7495713b/"}');

class Index extends React.Component {
    render() {
        return(
            <Particula saludo={saludo} identificacion={identificacion} mensaje={mensaje} redes={redes}/>
        );
    }
}

export default Index;