import React from 'react'
import './plans.css'
import { Col, Container, Row } from 'react-bootstrap'
import { BiSolidRightArrow } from "react-icons/bi";
import { Link } from 'react-router-dom'

const Plans = () => {
  return (
    <div className='plans_main'>
      <Container>
        <Row className='justify-content-center'>
            <Col lg={6} className='text-center'>
                <div className="plns_first">
                    <h2>Our Pricing Plans</h2>
                    <p>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
                </div>
            </Col>
        </Row>
        <Row>
            <Col lg={4} sm={6} md={4}>
                <div className="pricing_box">
                    <div className="box_number d-flex">
                        <h4>$299</h4>
                        <p>Per Design</p>
                    </div>
                    <h3>Landing Page </h3>
                    <p>When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.</p>
                    <h5><i><BiSolidRightArrow /> All limited links</i></h5>
                    <h5><i><BiSolidRightArrow /></i> Own analytics platform</h5>
                    <h5><i><BiSolidRightArrow /></i> Chat support</h5>
                    <h5><i><BiSolidRightArrow /></i >Optimize hashtags</h5>
                    <h5><i><BiSolidRightArrow /> Unlimited users</i></h5>
                    <div className="box_button">
                    <Link to={'/privacy'}>Get started</Link>
                    </div>
                </div>
            </Col>
            <Col lg={4} sm={6} md={4}>
                <div className="pricing_box">
                    <div className="box_number d-flex">
                        <h4>$399</h4>
                        <p>Multi Design</p>
                    </div>
                    <h3>Website Page  </h3>
                    <p>When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.</p>
                    <h5><i><BiSolidRightArrow /> All limited links</i></h5>
                    <h5><i><BiSolidRightArrow /></i> Own analytics platform</h5>
                    <h5><i><BiSolidRightArrow /></i> Chat support</h5>
                    <h5><i><BiSolidRightArrow /></i >Optimize hashtags</h5>
                    <h5><i><BiSolidRightArrow /> Unlimited users</i></h5>
                    <div className="box_button">
                    <Link to={'/privacy'}>Get started</Link>
                    </div>
                </div>
            </Col>
            <Col lg={4} className='d-none d-md-block' md={4} >
                <div className="pricing_box">
                    <div className="box_number d-flex">
                        <h4>$499 </h4>
                        <p>Per Design</p>
                    </div>
                    <h3>Complex Project </h3>
                    <p>When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.</p>
                    <h5><i><BiSolidRightArrow /> All limited links</i></h5>
                    <h5><i><BiSolidRightArrow /></i> Own analytics platform</h5>
                    <h5><i><BiSolidRightArrow /></i> Chat support</h5>
                    <h5><i><BiSolidRightArrow /></i >Optimize hashtags</h5>
                    <h5><i><BiSolidRightArrow /> Unlimited users</i></h5>
                    <div className="box_button">
                    <Link to={'/privacy'}>Get started</Link>
                    </div>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Plans
