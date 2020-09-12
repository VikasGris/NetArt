import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import { MDBContainer, MDBFooter, MDBCol, MDBRow , MDBIcon} from "mdbreact";
// import CallIcon from '@material-ui/icons/Call';
import { FaFacebook} from 'react-icons/fa';
import { FaPhoneAlt} from 'react-icons/fa';


class Content extends React.Component{
    
    render(){
        return(
            <div className="image">
                
                {/* <table>
                    <tr>
                <td>
                    
                </td>
                <td>
                <h5>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h5>
                <ul>
                    <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                    <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                </ul>
                <div className="image2"><img src="./images/2.png" alt="" /></div>
                <h5 id="form-control">Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</h5>
                </td>
                </tr>
                </table> */}
                <Container fluid>
                    <div>
                    <Row>
                        <Col xs ="4">
                            <img src="./images/1.png" alt="" className="image1"/>
                        </Col>
                        <Col xs={8}>
                            <div className="content1">
                                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
                            </div>
                            <div className="content2">
                                <ul>
                                    <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                                    <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                                </ul>
                            </div>

                            <div><img className="image2" src="./images/2.png" alt="" /></div>

                            <div className="content3">
                                Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                            </div>
                        </Col>
                    </Row>
                    </div>
                    <div className="content4">
                        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
                    </div>
                    <div >
                        <img className="image3" src="./images/3.png" alt="" />
                    </div>
                    <div className="content5">
                        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
                    </div>
                    <hr></hr>
                    <div className="content6">
                        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
                    </div>
                    <div className="content7">CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE| 
                    PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL</div>
                    
                    
                </Container>
                
            </div>
        );
    }
}
export default Content;