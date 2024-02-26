import React from 'react'
import delivry from '../../assets/Delivery_img.png'
import { Col, Container, Row } from 'react-bootstrap'
import './delivery.css'

const Delivery = () => {
  return (
    <div className='delivery_main'>
      <Container>
        <Row>
            <Col lg={6}>
                <img src={delivry} className='w-100' alt="" />
            </Col>
            <Col lg={6}>
                <div className="delivary_text">
                    <h6>Quick Delivery</h6>
                    <h2>Guranteed 1 week delivery for standard five pager website</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Delivery
