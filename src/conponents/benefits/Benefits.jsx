import React from 'react'
import './benefits.css'
import { Col, Container, Row } from 'react-bootstrap'
import Benefitsreusable from '../../reusable/Benefitsreusable'
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaPenRuler } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";

const Benefits = () => {
  return (
    <div className='benefit_main'>
      <Container>
        <Row className='justify-content-center'>
            <Col lg={6} className='text-center'>
                <div className="benefit_part_one">
                    <h2>The benefits of working with our team</h2>
                </div>
            </Col>
        </Row>
        <Row>
            <Benefitsreusable beneicon={<IoIosMailOpen />} title='Customize with ease' benepp='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.' />
            <Benefitsreusable beneicon={<FaPenRuler />} title='Customize with ease' benepp='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.' />
            <Benefitsreusable beneicon={<HiMiniUserGroup />} title='Customize with ease' benepp='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.' />

        </Row>
      </Container>
    </div>
  )
}

export default Benefits
