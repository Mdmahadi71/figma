import React from 'react'
import './created.css'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Created = () => {
  return (
    <div className='create_main'>
      <Container>
        <Row className='justify-content-center'>
            <Col lg={7} className='text-center'>
                <div className="create_text">
                    <h6>What we created</h6>
                    <h2>Our Work Portfolio</h2>
                    <p>We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p>
                    <div className="create_icon">
                        <i>{<FaFacebook />}</i>
                        <i>{<FaTwitter />}</i>
                        <i>{<FaInstagramSquare />}</i>
                        <i>{<FaLinkedin />}</i>
                    </div>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Created
