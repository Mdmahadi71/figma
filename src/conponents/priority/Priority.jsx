import React from 'react'
import './priority.css'
import { Col, Container, Row } from 'react-bootstrap'
import priorityimg from '../../assets/priority_img.png'

const Priority = () => {
  return (
    <div className='prio_main'>
      <Container>
        <Row>
            <Col lg={6}>
                <div className="prio_text">
                    <h6>24/7 Support</h6>
                    <h2>Working with us, you will be getting 24/7 priority support</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </Col>
            <Col lg={6}>
                <img src={priorityimg} className='w-100' alt="" />
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Priority
