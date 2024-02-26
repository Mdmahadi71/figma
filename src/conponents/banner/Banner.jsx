import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import banner from '../../assets/banner .png'
import './banner.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='banner_main'>
      <Container>
        <Row className='ban_mm'>
            <Col lg={6} md={6} >
                <div className="ban_txt">
                    <h2>Building stellar websites for early startups</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                </div>
                <div className="bnr_btn">
                <Link to={'/work'}>View our Work</Link>
                <Link to={'/privacy'}>Privacy <FaLongArrowAltRight /> </Link>
                </div>
            </Col>
            <Col lg={6} md={6} >
                <img src={banner} alt="" className='w-100' />
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner
