import React from 'react'
import './working.css'
import { Col, Container, Row } from 'react-bootstrap'
import Workingreusable from '../../reusable/Workingreusable'
import { TfiWrite } from "react-icons/tfi";
import { RiTeamFill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import worpartimg from '../../assets/working_logo.png'

const Working = () => {
  return (
    <div className='working_main'>
      <Container>
        <Row className='justify-content-center'>
            <Col lg={6} className='text-center'>
                <div className="wor_prt_first">
                <h2>The benefits of working with us</h2>
                </div>
            </Col>
        </Row>
        <Row>
            <Workingreusable wrkicon={<TfiWrite />} title='Customize with ease' worpp='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.'/>
            <Workingreusable wrkicon={<RiTeamFill />} title='Perfectly Responsive' worpp='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.'/>
            <Workingreusable  wrkicon={<FaCheckCircle/>}  title='Friendly Support' worpp='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.'/>
        </Row>
        <Row>
            <Col lg={12}>
                <img src={worpartimg} className='w-100' alt="" />
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Working
