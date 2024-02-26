import React from 'react'
import './agencies.css'
import { Col, Container, Row } from 'react-bootstrap'
import agenci from '../../assets/arround_img.png'

const Agencies = () => {
  return (
    <div className='agencis_main'>
      <Container>
        <Row>
            <Col lg={6}>
                <div className="agen_prt_main">
                    <h6>Use Client-first</h6>
                    <h2>Top agencies and freelancers around the world use 
                     Client-first 
                     </h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
            </Col>
            <Col lg={6}>
                <img src={agenci} className='w-100' alt="" />
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Agencies
