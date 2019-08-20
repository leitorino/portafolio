import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {

    render() {
        return(
            <div className="header">
                <hr></hr>
                <div className="nav">
                    <Link to="/">
                        <div className="nav-button">
                            <div>
                                Inicio
                            </div>
                        </div>
                    </Link>
                    <Link to="about">
                        <div className="nav-button">
                            <div>
                                Sobre Mi
                            </div>
                        </div>
                    </Link>
                    <Link to="asd">
                        <div className="nav-button">
                            <div>
                                Proyectos
                            </div>
                        </div>
                    </Link>
                    <Link to="contacto">
                        <div className="nav-button">
                            <div>
                                Contacto
                            </div>
                        </div>
                    </Link>
                    <Link to="asd">
                        <div className="nav-button">
                            <div>
                                Buscador
                            </div>
                        </div>
                    </Link>
                </div>
                
            </div>
        );
    }
}

export default Header;