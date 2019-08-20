import React from 'react';

import icon4 from '../../../public/iconos/graduation-cap-solid.svg';
import icon3 from '../../../public/iconos/leanpub-brands.svg';
import icon2 from '../../../public/iconos/id-card-regular.svg';
import icon1 from '../../../public/iconos/user-cog-solid.svg';

class Info extends React.Component {

    state = {
        loading: true,
        error: null,
        image: [],
        data: [],
        habilidades: [],
        cursos: [],
        estudios: [],
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({loading: true, error: null}); 

        try{ 
            const response = await fetch('http://127.0.0.1:8888/api/image/get');
            const image = await response.json();
            this.setState({image: image});
        }catch(error){
            this.setState({error: error});
        }

        try{ 
            const response = await fetch('http://127.0.0.1:8888/api/habilidad/get');
            const habilidades = await response.json();
            this.setState({habilidades: habilidades});
        }catch(error){
            this.setState({error: error});
        }

        try{ 
            const response = await fetch('http://127.0.0.1:8888/api/curso/get');
            const cursos = await response.json();
            this.setState({cursos: cursos});
        }catch(error){
            this.setState({error: error});
        }

        try{ 
            const response = await fetch('http://127.0.0.1:8888/api/estudio/get');
            const estudios = await response.json();
            this.setState({estudios: estudios});
        }catch(error){
            this.setState({error: error});
        }

        try{ 
            const response = await fetch('http://127.0.0.1:8888/api/informacion/get');
            const data = await response.json();
            this.setState({loading: false, data: data});
        }catch(error){
            this.setState({loading: false, error: error});
        } 
    }

    render() {    

        return(
            <div className="container-position">
                <div className="row ml-0 mr-0 mt-5">
                    <div className="col-12 text-left pt-5 mb-2 m-0">
                        <h2>
                            Sobre<br></br>Alcides León
                        </h2>
                    </div>
                </div>

                <div className="image-horizontal">
                    <img className="img-fluid" src={this.state.image.about} alt="yo horizontal"/>
                </div>
                

                <div className="row ml-0 mr-0 mt-4 mb-3">
                    <div className="col-md-6 col-sm-12">
                        <div className="col-12 text-center">
                            <div className="row mb-2">
                                <div className="col-12 text-center">
                                    <img src={icon1} className="icons-1 d-inline" alt="icono de habilidades"></img>
                                    <div className="d-inline ml-2">Habilidades</div>
                                </div>
                            </div>
                            {this.state.habilidades.map(habilidad => (
                                <div className="row" key={habilidad.id}>
                                    <div className="col-2 offset-2 text-center">
                                        <img src={habilidad.img} alt={"logo de " + habilidad.nombre} className="img-fluid w-75 h-75"></img>
                                    </div>
                                    <div className="col-3">
                                        {habilidad.nombre}
                                    </div>
                                    <div className="col-3">
                                        <meter min="0" max="5" low="2" high="4" optimum="5" value={habilidad.valor}></meter>
                                    </div>
                                </div>
                            ))} 
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="col-12 text-center mb-2">
                            <img src={icon2} className="icons-1 d-inline" alt="icono de sobre mi"></img>
                            <div className="d-inline ml-2">Sobre Mi</div>
                        </div>
                        <div className="col-12 text-justify">
                            <p>{this.state.data.mensaje}</p>
                        </div>
                    </div>
                </div>
                <div className="row ml-0 mr-0 mb-3 mt-3">
                    <div className="col-md-6 col-sm-12">
                        <div className="col-12 text-center mb-2">
                            <img src={icon3} className="icons-1 d-inline" alt="icono de cursos"></img>
                            <div className="d-inline ml-2">Cursos</div>
                        </div>
                        <div className="col-12">
                            {this.state.cursos.map(curso => (
                                <div className="row mb-2" key={curso.id}>
                                    <div className="col-7 offset-2">
                                        <li>
                                            {curso.titulo}
                                        </li>
                                    </div>
                                    <div className="col-3">
                                        <a href={curso.link} target="_blank" className="btn boton">
                                            Ver Mas
                                        </a>
                                    </div>
                                </div>
                            ))} 
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="col-12 text-center mb-2">
                            <img src={icon4} className="icons-1 d-inline" alt="icono de estudios"></img>
                            <div className="d-inline ml-2">Estudios</div>
                        </div>
                        <div className="col-12">
                        {this.state.estudios.map(estudio => (
                                <div className="row mb-2" key={estudio.id}>
                                    <div className="col-4 offset-1 text-center">
                                        <div>{estudio.nivel}</div>
                                        {(estudio.titulo) && (
                                            <p>
                                                {estudio.titulo}
                                            </p>
                                        )}
                                        <p className="subtitulo">
                                            {estudio.inicio}-{estudio.fin}
                                        </p>
                                    </div>
                                    <div className="col-6 text-center">
                                        {estudio.instituto}
                                    </div>
                                </div>
                            ))} 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Info;