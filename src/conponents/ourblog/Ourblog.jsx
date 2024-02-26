import React from 'react'
import './ourblog.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import oureboximg from '../../assets/oure1.png'
import oureboximg2 from '../../assets/oure2.png'
import oureboximg3 from '../../assets/oure3.png'
import oureboximg4 from '../../assets/oure4.png'
import oureboximg5 from '../../assets/oure5.png'
import oureboximg6 from '../../assets/oure6.png'

const Ourblog = () => {
  return (
    <div>
      <Container>
        <Row>
            <Col lg={6}>
                <div className="blog_aa">
                    <h2>Our Blog</h2>
                </div>
            </Col>
        </Row>
        <Row>
            <Col lg={4}>
                <div className="crea_box">
                    <img src={oureboximg} className='w-100' alt="" />
                    <h6>27 Jan 2021</h6>
                    <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                    <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                    <Link to={'/readblog'}>Read More <FaArrowRightLong/></Link>
                </div>
            </Col>
            <Col lg={4}>
                <div className="crea_box">
                    <img src={oureboximg2} className='w-100' alt="" />
                    <h6>27 Jan 2021</h6>
                    <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                    <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                    <Link to={'/readblog'}>Read More <FaArrowRightLong/></Link>
                </div>
            </Col>
            <Col lg={4}>
                <div className="crea_box">
                    <img src={oureboximg3} className='w-100' alt="" />
                    <h6>27 Jan 2021</h6>
                    <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                    <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                    <Link to={'/readblog'}>Read More <FaArrowRightLong/></Link>
                </div>
            </Col>
            <Col lg={4}>
                <div className="crea_box">
                    <img src={oureboximg4} className='w-100' alt="" />
                    <h6>27 Jan 2021</h6>
                    <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                    <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                    <Link to={'/readblog'}>Read More <FaArrowRightLong/></Link>
                </div>
            </Col>
            <Col lg={4}>
                <div className="crea_box">
                    <img src={oureboximg5} className='w-100' alt="" />
                    <h6>27 Jan 2021</h6>
                    <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                    <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                    <Link to={'/readblog'}>Read More <FaArrowRightLong/></Link>
                </div>
            </Col>
            <Col lg={4}>
                <div className="crea_box">
                    <img src={oureboximg6} className='w-100' alt="" />
                    <h6>27 Jan 2021</h6>
                    <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                    <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                    <Link to={'/readblog'}>Read More <FaArrowRightLong/></Link>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Ourblog
