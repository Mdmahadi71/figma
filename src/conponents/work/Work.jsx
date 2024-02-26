import React from 'react'
import './work.css'
import { Container, Row ,Col,} from 'react-bootstrap'
import { FaLongArrowAltRight } from "react-icons/fa";
import Workreusable from '../../reusable/Workreusable';
import one from '../../assets/workone.png'
import two from '../../assets/worktwo.png'
import three from '../../assets/workthree.png'
import fure from '../../assets/workfure.png'
import { Link } from 'react-router-dom'


const Work = () => {
  return (
    <div className='work_main'>
      <Container>
        <Row>
            <Col lg={5} sm={5} md={5}>
                <div className="part_fast">
                    <h2>How we work</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <div className="work_btn">
                    <Link to={'/work'}>Get in touch with us <FaLongArrowAltRight /></Link>
                    </div>
                </div>
            </Col>
            <Col lg={7} sm={7} md={7}>
                <Row>
                  <Col lg={6} sm={6} md={6}>
                  <Workreusable workimg={one} mahadi='Strategy' para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'/>
                  </Col>
                  <Col lg={6 } sm={6} md={6}>
                  <Workreusable workimg={two} mahadi='Wireframing' para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'/>
                  </Col>
                  <Col lg={6} className='d-none d-md-block' md={6}  >
                  <Workreusable workimg={three} mahadi='Design' para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'/>
                  </Col>
                  <Col lg={6} sm={6} className='d-none d-md-block' md={6}   >
                  <Workreusable workimg={fure} mahadi='Development' para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'/>
                  </Col>
                </Row>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Work
