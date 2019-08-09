import React from 'react';


class Header extends React.Component {

    render() {
        return(
            <div className="header">
                <hr></hr>
                <div className="nav">
                    
                    <a href="">
                        <div className="nav-button">
                            Inicio
                        </div>
                    </a>
                    <a href="">
                        <div className="nav-button">
                            Sobre Mi
                        </div>
                    </a>
                    <a href="">
                        <div className="nav-button">
                            Proyectos
                        </div>
                    </a>
                    <a href="">
                        <div className="nav-button">
                            Contacto
                        </div>
                    </a>
                    <a href="">
                        <div className="nav-button">
                            Buscador
                        </div>
                    </a>
                </div>
                
            </div>
        );
    }
}

export default Header;