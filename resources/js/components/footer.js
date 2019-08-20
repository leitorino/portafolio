import React from 'react';
import facebookicon from '../../../public/images/facebook.png';
import twittericon from '../../../public/images/twitter.png';
import linkedinicon from '../../../public/images/linkedin.png';
import instagramicon from '../../../public/images/instagram.png';

class Footer extends React.Component {
    state = {
        error: null,
        redes: [],
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {

        try{ 
            const response = await fetch('http://127.0.0.1:8888/api/redes/1');
            var redes = await response.json();
            this.setState({redes: redes});
            this.setState({redes: JSON.parse(redes)});
        }catch(error){
            this.setState({error: error});
        }

    }
    
    render() { 

        function footerContent(state) {
            return(
            <div className="content">
                <center>
                    {(state.redes.Facebook) && (
                        <div className="footer-social">
                            <a href={state.redes.Facebook} target="_blank"> 
                                <img src={facebookicon} className="social-icon" alt="icono de facebook"/>
                            </a>
                        </div>
                    )}
                    {(state.redes.Twitter) && (
                    <div className="footer-social">
                        <a href={state.redes.Twitter} target="_blank">
                            <img src={twittericon} className="social-icon" alt="icono de twitter"/>
                        </a>
                    </div>)}
                    {(state.redes.Instagram) && (
                    <div  className="footer-social">
                        <a href={state.redes.Instagram} target="_blank">
                            <img src={instagramicon} className="social-icon" alt="icono de instagram"/>
                        </a>
                    </div>
                    )}
                    {(state.redes.Linkedin) && (
                    <div  className="footer-social">
                        <a href={state.redes.Linkedin} target="_blank">
                            <img src={linkedinicon} className="social-icon" alt="icono de linkedin"/>
                        </a>
                    </div>
                    )}
                </center>
            </div>
            );
        }

        if(this.props.type=="normal"){
            return(
            <div className="footer footer2">
                {footerContent(this.state)}
            </div>
            );
        }else{
            return(
            <div className="footer fixed-bottom">
                {footerContent(this.state)}
            </div>
            );
        }
    }
}

export default Footer;