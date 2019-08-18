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
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({loading: true, error: null}); 

        try{ 
            const response = await fetch('http://127.0.0.1:8888/api/image/1');
            const image = await response.json();
            this.setState({image: image});
        }catch(error){
            this.setState({error: error});
        }

        try{ 
            const response = await fetch('http://127.0.0.1:8888/api/informacion/1');
            const data = await response.json();
            this.setState({loading: false, data: data});
        }catch(error){
            this.setState({loading: false, error: error});
        }

        console.log(this.state.data);

    }

    render() {
        return(
            <div className="container-position">
                    <div className="row m-0">
                        <div className="col-12 text-left pt-5 mb-2 m-0">
                            <h2>
                                Sobre<br></br>Alcides León
                            </h2>
                        </div>
                    </div>

                    <div className="image-horizontal">
                        <img className="img-fluid" src={this.state.image.about} alt="yo horizontal"/>
                    </div>
                    

                    <div className="row m-0">
                        <div className="col-6">
                            <div className="col-12 text-center">
                                <img src={icon1} className="icons-1 d-inline" alt="icono de habilidades"></img>
                                <div className="d-inline ml-2">Habilidades</div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="col-12 text-center">
                                <img src={icon2} className="icons-1 d-inline" alt="icono de sobre mi"></img>
                                <div className="d-inline ml-2">Sobre Mi</div>
                            </div>
                            <div className="col-12 text-justify">
                                {this.state.data.mensaje}
                            </div>
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="col-6">
                            <div className="col-12 text-center">
                                <img src={icon3} className="icons-1 d-inline" alt="icono de cursos"></img>
                                <div className="d-inline ml-2">Cursos</div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="col-12 text-center">
                                <img src={icon4} className="icons-1 d-inline" alt="icono de estudios"></img>
                                <div className="d-inline ml-2">Estudios</div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Info;