import React from 'react'
import './studies.css'
import { Col, Container, Row } from 'react-bootstrap'
import studiesimg from '../../assets/studis_img.png'

const Studies = () => {
  return (
    <div className='studies_main'>
      <Container>
        <Row className='justify-content-center' >
            <Col lg={10}   >
                <div className="studis_all">
                <h4>Web design and development</h4>
                    <h2>Finsweet Design case studies</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                </div>
            </Col>
        </Row>
        <Row className='justify-content-center'>
            <Col lg={10} xs={10}  className='text-center'>
                    <img src={studiesimg} className='w-100' alt="" />
                    <div className="stu_part_lst ">
                        <div className="last_text">
                            <p>Client</p>
                            <h5>facebook.com</h5>
                        </div>
                        <div className="last_text">
                            <p>Service</p>
                            <h5>Product Design</h5>
                        </div>
                        <div className="last_text">
                            <p>Deliverable</p>
                            <h5>UI Screens, UX Flow & Prototype</h5>
                        </div>
                    </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Studies
