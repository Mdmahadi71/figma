import React from 'react'
import './features.css'
import { Container, Row,Col } from 'react-bootstrap'
import Featuresreusable from '../../reusable/Featuresreusable'
import { RiTeamFill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { FaStopwatch } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";

const Features = () => {
  return (
    <div className='feart'>
      <Container>
        <Row justify-content-center>
            <Col lg={12} text-center>
                <div className="fes_part_first">
                <h5>Features</h5>
                <h3>Design that solves problems, one product at a time</h3>
                </div>
            </Col>
        </Row>
        <Row>
        <Featuresreusable feaicon={<RiTeamFill />} title='Uses Client First' para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ' />
        <Featuresreusable feaicon={<FaCheckCircle />} title='Two Free Revision Round' para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ' />
        <Featuresreusable  feaicon={<MdContactSupport />} title='Template Customization' para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ' />
        <Featuresreusable  feaicon={<MdContactSupport />} title='24/7 Support' para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ' />
        <Featuresreusable feaicon={<FaStopwatch />} title='Quick Delivery' para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ' />
        <Featuresreusable  feaicon={<TfiWrite />} title='Hands-on approach' para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ' />
        </Row>
      </Container>
    </div>
  )
}

export default Features
