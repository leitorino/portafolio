import React from 'react';
import Particles from 'react-particles-js';
// import Yo from '../../../public/images/yop.jpg';

class Particula extends React.Component {

    state = {
        loading: true,
        error: null,
        data: [],
        image: [],
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({loading: true, error: null}); 

        try{ 
            const response = await fetch('http://127.0.0.1:8888/api/introduccion/1');
            const data = await response.json();
             this.setState({data: data});
        }catch(error){
            this.setState({error: error});
        }

        try{ 
            const response = await fetch('http://127.0.0.1:8888/api/image/1');
            const image = await response.json();
            this.setState({loading: false, image: image});
        }catch(error){
            this.setState({loading: false, error: error});
        }

    }


    render() {
        if(this.state.loading === true){
            return 'Loading...'
        }

        return(
            <div className="contenedor">
                <div className="particulas">
                <Particles 
                    params={{
                        polygon: {
                            draw: {
                                stroke: {
                                    enable: false,
                                    color: "#000000"
                                }
                            }
                        },
                        interactivity:{
                            events: {
                                onhover:{
                                    enable: true,
                                    mode: "repulse"
                                },
                                resize: true
                            },
                            modes: {
                                grab: {
                                    distance: 400,
                                    line_linked: {
                                        opacity: 1
                                    }
                                }
                            }
                        },
                        particles: {
                            color:{
                                value: "#000000"
                            },
                            shape:{
                                type: "circle",
                                stroke:{
                                    color: "#000000"
                                }
                            },
                            number: {
                                value: 90,
                                density: {
                                    enable: true,
                                    value_area: 900
                                }
                            },
                            line_linked: {
                                color: "#000000",
                                shadow: {
                                    enable: true,
                                    color: "#000000",
                                    blur: 10
                                }
                            }
                        }
                    }}
                />
                </div>
                <div className="titulo">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 offset-md-2 col-sm-12">
                                <div className="bajada">
                                    <div className="image-alineacion">
                                        <img className="image-principal" src={this.state.image.inicio} alt="yop"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 text-left p-4">
                                <div className="subida">
                                    <h3>{this.state.data.saludo}</h3>
                                    <h4>{this.state.data.identificacion}</h4>
                                    <h6>
                                        {this.state.data.introduccion}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
        );
    }
}

export default Particula;