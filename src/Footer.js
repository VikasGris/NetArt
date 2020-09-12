import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './App.css';
import { FaFacebook} from 'react-icons/fa';
import { FaPhoneAlt} from 'react-icons/fa';
import { FaSearch} from 'react-icons/fa';

class Footer extends React.Component{
    render(){
        return(
            <div className="Footer">
                <footer>
                        <Row>
                            {/* <CallIcon color="action"/> */}
                            <Col className="toll"><FaPhoneAlt size={25}className="footer_icon"/>  Toll free <b>1800 200 1234</b></Col>
                            <Col className="web"> <FaFacebook size={25}className="footer_icon"/>  www.facebook.com</Col>
                            <Col className="web1"><FaSearch size={25}className="footer_icon"/>  www.crigroups.com</Col>
                        </Row>
                        
                </footer>
                
            </div>
        );
    }
}
export default Footer;