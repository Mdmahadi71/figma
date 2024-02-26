import React from 'react'
import './goal.css'
import { Container, Row ,Col } from 'react-bootstrap'
import goalimges from '../../assets/goalimg.png'

const Goal = () => {
  return (
    <div className='goalpart_main'>
      <Container>
        <Row>
            <Col lg={6}>
                <div className="gl_prt_one">
                    <h6>Who we are</h6>
                    <h2>Goal focussed</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </Col>
            <Col lg={6}>
                <div className="gl_prt_two">
                    <h2>Continuous improvement</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </Col>
        </Row>
      </Container>
      <Container>
        <Row>
            <Col lg={12}>
                <img src={goalimges} className='w-100' alt="" />
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Goal
