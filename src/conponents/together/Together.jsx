import React from 'react'
import './together.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Together = () => {
  return (
    <div className='tog_main'>
      <Container>
        <Row className='justify-content-center'>
            <Col lg={7} className='text-center'>
                <div className="tog_text">
                    <h2>Let's build something great together</h2>
                    <p>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
                    <div className="tog_btn">
                    <Link to={'/contact'}>Contact us</Link>
                    </div>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Together
