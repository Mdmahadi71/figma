import React from 'react'
import './team.css'
import { Container, Row ,Col } from 'react-bootstrap'
import teamimg from '../../assets/team_img_1.png'
import teamimg2 from '../../assets/team_img_2.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  return (
    <div className='team_main'>
      <Container>
        <Row>
            <Col lg={5}>
                <div className="team_one">
                    <h2>Meet our team</h2>
                </div>
            </Col>
        </Row>
        <Row>
            <Col lg={3} sm={6}>
                <div className="meet_box">
                    <div className="meet_box_img">
                        <img src={teamimg} alt="" />
                        <div className="overlay">
                            <div className="icon">
                                <i><FaFacebook /></i>
                                <i><FaTwitter /></i>
                                <i><FaLinkedin /></i>
                            </div>
                        </div>
                    </div>
                    <h3>John Smith</h3>
                    <p>Project Manager</p>
                </div>
            </Col>
            <Col lg={3} sm={6}>
                <div className="meet_box">
                    <div className="meet_box_img">
                        <img src={teamimg2} alt="" />
                        <div className="overlay">
                            <div className="icon">
                                <i><FaFacebook /></i>
                                <i><FaTwitter /></i>
                                <i><FaLinkedin /></i>
                            </div>
                        </div>
                    </div>
                    <h3>Simon Adams</h3>
                    <p>Devloper</p>
                </div>
            </Col>
            <Col lg={3} sm={6}>
                <div className="meet_box">
                    <div className="meet_box_img">
                        <img src={teamimg} alt="" />
                        <div className="overlay">
                            <div className="icon">
                                <i><FaFacebook /></i>
                                <i><FaTwitter /></i>
                                <i><FaLinkedin /></i>
                            </div>
                        </div>
                    </div>
                    <h3>John Smith</h3>
                    <p>CEO</p>
                </div>
            </Col>
            <Col lg={3} sm={6}>
                <div className="meet_box">
                    <div className="meet_box_img">
                        <img src={teamimg2} alt="" />
                        <div className="overlay">
                            <div className="icon">
                                <i><FaFacebook /></i>
                                <i><FaTwitter /></i>
                                <i><FaLinkedin /></i>
                            </div>
                        </div>
                    </div>
                    <h3>John Smith</h3>
                    <p>Design Lead</p>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Team
