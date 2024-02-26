import React from 'react'
import './solvepart.css'
import { Container,Row,Col } from 'react-bootstrap'
import solvepartimg from '../../assets/solve_img.png'

const Solve = () => {
  return (
    <div className='solvepart_main'>
       <Container>
        <Row>
            <Col lg={6}>
                <div className="solve_part_one">
                <h5>About us</h5>
                <h2>Our designs solve problems</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </Col>
            <Col lg={6}>
                <div className="solve_part_two">
                    <img src={solvepartimg} className='w-100' alt="" />
                </div>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Solve

