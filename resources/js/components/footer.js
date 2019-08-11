import React from 'react';
import facebookicon from '../../../public/images/facebook.png';
import twittericon from '../../../public/images/twitter.png';
import linkedinicon from '../../../public/images/linkedin.png';
import instagramicon from '../../../public/images/instagram.png';

class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                <div className="content">
                    <center>
                        {(this.props.redes.Facebook) ? (
                            <div className="footer-social">
                                <a href={this.props.redes.Facebook}> 
                                    <img src={facebookicon} className="social-icon" alt="icono de facebook"/>
                                </a>
                            </div>
                        ):(<div></div>)}
                        {(this.props.redes.Twitter) ? (
                        <div className="footer-social">
                            <a href={this.props.redes.Twitter}>
                                <img src={twittericon} className="social-icon" alt="icono de twitters"/>
                            </a>
                        </div>):(<div></div>)}
                        {(this.props.redes.Instagram) ? (
                        <div  className="footer-social">
                            <a href={this.props.redes.Instagram}>
                                <img src={instagramicon} className="social-icon" alt="icono de instagram"/>
                            </a>
                        </div>
                        ):(<div></div>)}
                        {(this.props.redes.Linkedin) ? (
                        <div  className="footer-social">
                            <a href={this.props.redes.Linkedin}>
                                <img src={linkedinicon} className="social-icon" alt="icono de linkedin"/>
                            </a>
                        </div>
                        ):(<div></div>)}
                    </center>
                </div>
            </div>
        );
    }
}

export default Footer;