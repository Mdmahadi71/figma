import React from 'react'
import './footer.css'
import { Container, Row,Col,Navbar,Nav  } from 'react-bootstrap'
import ftrlogo from '../../assets/navlogo.png'
import frtlgolst from '../../assets/ftrlgo.png'
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer_main'>
       <Container>
        <Row className='footer_part_first'>
           <Col lg={5}sm={6}>
                <div className="footer_iner">
                <h5></h5>
                <p>We are always open to discuss your project and improve your online presence.</p>
                </div>
                <div className="emai_part">
                    <div className="one_e">
                        <h4>Email me at</h4>
                        <p>contact@website.com</p>
                    </div>
                    <div className="two_e">
                        <h4>Call us</h4>
                        <p>0927 6277 28525</p>
                    </div>
                </div>
           </Col>
           <Col lg={6} sm={6}>
                <div className="secnd_iner">
                <img src={frtlgolst} alt="" />
                <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                <div className="footer_icons">
                <BsFacebook />
                <FaTwitter />
                <FaInstagramSquare />
                <FaLinkedin />
                </div>
                </div>
           </Col>
        </Row>
       </Container>
       <Navbar expand="lg" className='footer_manu' >
      <Container>
        <Navbar.Brand href="#home" className='mahadi'>Copyright 2022, Finsweet.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ftr" >
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About us</Link>
          <Link to={'/features'}>Features</Link>
          <Link to={'/privacy'}>Privacy</Link>
          <Link to={'/readblog'}>Read Blog</Link>
          <Link to={'/work'}>Work</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Footer
