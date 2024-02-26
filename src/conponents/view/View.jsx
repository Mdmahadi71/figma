import React from 'react'
import './view.css'
import { Container, Row ,Col} from 'react-bootstrap'
import { FaLongArrowAltRight } from "react-icons/fa";
import viewimg from '../../assets/sdf (2).png'
import viewimgtwo from '../../assets/sdf (1).png'
import { Link } from 'react-router-dom'

const View = () => {
  return (
    <div className='viewall'>
      <Container>
        <Row>
            <Col lg={10} sm={8} xs={6}>
                <div className="view_aasd">
                <h3>View our projects</h3>
                </div>
            </Col>
            <Col  lg={2} sm={4} xs={6} >
                <div className="view_inner">
                <Link to={'/features'}>View More <FaLongArrowAltRight /></Link>
                </div>
            </Col>
        </Row>
        <Row>
            <Col lg={8} sm={8} md={8}>
                <div className="view_fast_img">
                    <img src={viewimg} className='w-100' alt="" />
                    <div className="overlaya"></div>
                    <div className="view_test  ">
                    <h3>Workhub office Webflow Webflow Design</h3>
                    <Link to={'/pricing'}>View project <FaLongArrowAltRight /></Link>
                    </div>
                </div>
            </Col>
            <Col lg={4 } sm={4} md={4} className='view_last'>
                <div className="view_part_two">
                    <div className="view_two">
                        <img src={viewimgtwo} className='w-100' alt="" />
                        <div className="overlaya">

                        </div>
                        <div className="last_over " >
                        <h3>Unisaas Website 
                                    Design</h3>
                                    <Link to={'/work'}>View portfolio <FaLongArrowAltRight /></Link>
                        </div>
                    </div>
                </div>
                <div className="view_part_two">
                    <div className="view_two">
                        <img src={viewimgtwo} className='w-100' alt="" />
                        <div className="overlaya">

                        </div>
                        <div className="last_over ">
                        <h3>Unisaas Website 
                                    Design</h3>
                          <Link to={'/work'}>View portfolio <FaLongArrowAltRight /></Link>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default View
