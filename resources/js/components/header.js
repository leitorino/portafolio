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
                            Inicio
                        </div>
                    </Link>
                    <Link to="asd">
                        <div className="nav-button">
                            Sobre Mi
                        </div>
                    </Link>
                    <Link to="asd">
                        <div className="nav-button">
                            Proyectos
                        </div>
                    </Link>
                    <Link to="asd">
                        <div className="nav-button">
                            Contacto
                        </div>
                    </Link>
                    <Link to="asd">
                        <div className="nav-button">
                            Buscador
                        </div>
                    </Link>
                </div>
                
            </div>
        );
    }
}

export default Header;