import React from 'react'
import './creating.css'
import { Col, Container, Row } from 'react-bootstrap'
import creaimg from '../../assets/crea_img.png'
import { Link } from 'react-router-dom'

const Creating = () => {
  return (
    <div className='creating_main'>
      <Container>
        <Row className='justify-content-center'>
            <Col lg={9} className='text-center'>
                <div className="crea_first_text">
                    <h2>A UX Case Study on Creating a Studious Environment for Students</h2>
                    <p>Andrew Jonson Posted on 27th January 2021</p>
                </div>
            </Col>
        </Row>
        <Row>
            <Col lg={12}>
                <img src={creaimg} className='w-100' alt="" />
            </Col>
        </Row>
        <Row className='justify-content-center'>
            <Col lg={7} className='text-center'>
                <div className="crea_text_last">
                    <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
                    <Link to={'/readblog'}>Read more</Link>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Creating
