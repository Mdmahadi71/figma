import React from 'react'
import './revision.css'
import { Col, Container, Row } from 'react-bootstrap'
import revisionimg from '../../assets/revisionimg.png'

const Revision = () => {
  return (
    <div className='revison_main'>
      <Container>
        <Row>
            <Col lg={6}>
                <img src={revisionimg} className='w-100' alt="" />
            </Col>
            <Col lg={6}>
                <div className="revis_text">
                    <h6>Free Revision Rounds</h6>
                    <h2>Get free Revisions and one week of free maintenance</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Revision
