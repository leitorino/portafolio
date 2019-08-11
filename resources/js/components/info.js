import React from 'react';

import icon4 from '../../../public/iconos/graduation-cap-solid.svg';
import icon3 from '../../../public/iconos/leanpub-brands.svg';
import icon2 from '../../../public/iconos/id-card-regular.svg';
import icon1 from '../../../public/iconos/user-cog-solid.svg';

class Info extends React.Component {

    render() {
        return(
            <div className="container-position">
                    <div className="row">
                        <div className="col-12 text-left pt-5 ml-5 mb-2">
                            <h2>
                                Sobre<br></br>Alcides León
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <img className="image-horizontal" src="" alt="yo horizontal"/>
                        </div>
                    </div>
                    <div className="row">
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
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="col-12 text-center">
                                <img src={icon3} className="icons-1 d-inline" alt="icono de estudios"></img>
                                <div className="d-inline ml-2">Sobre Mi</div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="col-12 text-center">
                                <img src={icon4} className="icons-1 d-inline" alt="icono de cursos"></img>
                                <div className="d-inline ml-2">Sobre Mi</div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Info;