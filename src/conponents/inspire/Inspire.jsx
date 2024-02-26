import React from 'react'
import './inspire.css'
import { Col, Container, Row } from 'react-bootstrap'
import insptw from '../../assets/insp_tw.png'
import inspone from '../../assets/insp_one.png'

const Inspire = () => {
  return (
    <div className='inspone_main'>
      <Container>
        <Row>
            <Col lg={7}>
                <div className="inp_prt_one">
                <h6>Our Mission </h6>
                <h2>Inspire, Innovate, Share</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                </div>
            </Col>
            <Col lg={5}>
                <img src={inspone} className='w-100' alt="" />
            </Col>
        </Row>
        <Row>
            <Col lg={5}>
                <img src={insptw} className='w-100' alt="" />
            </Col>
            <Col lg={7}>
                <div className="inp_part_two">
                    <h6>Our Vision</h6>
                    <h2>Laser focus</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Inspire
