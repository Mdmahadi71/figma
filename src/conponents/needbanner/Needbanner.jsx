import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import needimg from '../../assets/need_img.png'
import './needbanner.css'
import need_last from '../../assets/need_last.png'
import { Link } from 'react-router-dom'

const Needbanner = () => {
  return (
    <>
    <div className='need_main'>
      <Container>
        <Row>
            <Col lg={6}>
                <div className="need_part_one">
                    <h2>All the features you need</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="need_btn">
                    <Link to={'/pricing'}>View Pricing</Link>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className="need_img">
                    <img src={needimg} className='w-100' alt="" />
                </div>
            </Col>
        </Row>
      </Container>
    </div>
    <div className="need_last">
        <Container>
            <Row>
                <Col lg={12}>
                    <img src={need_last} className='w-100' alt="" />
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Needbanner
