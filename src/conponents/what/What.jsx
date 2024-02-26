import React from 'react'
import './what.css'
import { Container, Row,Col } from 'react-bootstrap'
import whatimg from '../../assets/partsnd.png'


const What = () => {
  return (
    <div className='whats'>
      <Container>
        <Row>
            <Col lg={4}>
                <div className="part_first">
                    <h2>What our clients say about us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </div>
            </Col>
            <Col lg={8}>
                <div className="part_snd">
                    <h2>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h2>
                    <div className="part_img">
                            <div className="imgs">
                                <img src={whatimg}  alt="" />
                            </div>
                            <div className="texts">
                                 <h5>Jenny Wilson</h5>
                                <p>Vice President</p>
                            </div>
                    </div>
                </div>
            </Col>
        </Row>
      </Container>
     
    </div>
  )
}

export default What
