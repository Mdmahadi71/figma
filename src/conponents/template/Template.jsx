import React from 'react'
import './template.css'
import {Col, Container, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import tramp1 from '../../assets/tmp_1.png'
import tramp2 from '../../assets/tmp_2.png'
import tramp3 from '../../assets/tmp_3.png'
import tramp4 from '../../assets/tmp_4.png'
import tramp5 from '../../assets/tmp_5.png'
import tramp6 from '../../assets/tmp_6.png'

const Template = () => {
  return (
   <div className='temp_main'>
    <Container>
      <Row className='justify-content-center'>
        <Col lg={6} className='text-center'>
          <div className="trmp_text">
             <div className="aaone"><p>All</p> </div>
             <div className="aaone"><p>UI Design</p></div>
             <div className="aaone"><p>Webflow Design</p></div>
             <div className="aaone"><p>Figma Design</p></div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
            <div className="trmp_all">
              <img src={tramp1} className='w-100' alt="" />
              <h2>Template 1</h2>
              <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
               <div className="trmp_btn">
               <Link to={'/pricing'}>View Portfolio <i><FaArrowRightLong /></i> </Link>
               </div>
            </div>
        </Col>
        <Col lg={6}>
            <div className="trmp_all">
              <img src={tramp2} className='w-100' alt="" />
              <h2>Template 2</h2>
              <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
               <div className="trmp_btn">
               <Link to={'/pricing'}>View Portfolio <i><FaArrowRightLong /></i> </Link>
               </div>
            </div>
        </Col>
        <Col lg={6}>
            <div className="trmp_all">
              <img src={tramp3} className='w-100' alt="" />
              <h2>Template 3</h2>
              <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
               <div className="trmp_btn">
               <Link to={'/pricing'}>View Portfolio <i><FaArrowRightLong /></i> </Link>
               </div>
            </div>
        </Col>
        <Col lg={6}>
            <div className="trmp_all">
              <img src={tramp4} className='w-100' alt="" />
              <h2>Template 4</h2>
              <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
               <div className="trmp_btn">
               <Link to={'/pricing'}>View Portfolio <i><FaArrowRightLong /></i> </Link>
               </div>
            </div>
        </Col>
        <Col lg={6}>
            <div className="trmp_all">
              <img src={tramp5} className='w-100' alt="" />
              <h2>Template 5</h2>
              <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
               <div className="trmp_btn">
               <Link to={'/pricing'}>View Portfolio <i><FaArrowRightLong /></i> </Link>
               </div>
            </div>
        </Col>
        <Col lg={6}>
            <div className="trmp_all">
              <img src={tramp6} className='w-100' alt="" />
              <h2>Template 6</h2>
              <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
               <div className="trmp_btn">
               <Link to={'/pricing'}>View Portfolio <i><FaArrowRightLong /></i> </Link>
               </div>
            </div>
        </Col>
      </Row>
    </Container>
   </div>
  )
}

export default Template
