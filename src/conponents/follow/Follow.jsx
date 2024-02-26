import React from 'react'
import './follow.css'
import { Container ,Row,Col} from 'react-bootstrap'

const Follow = () => {
  return (
    <div className='follow_main'>
      <Container>
        <Row className=' justify-content-center'>
            <Col lg={6} className='text-center  '>
                <div className="pro">
                <h3>The process we follow</h3>
                </div>
            </Col>
        </Row>
        <Row>
            <Col lg={3} sm={6}>
                <div className="follow_box">
                    <div className="follow_point">

                    </div>
                    <div className="dotet"></div>
                    <h3>Planning</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                </div>
            </Col>
            <Col lg={3} sm={6}>
                <div className="follow_box">
                    <div className="follow_point">

                    </div>
                    <div className="dotet"></div>
                    <h3>Conception</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                </div>
            </Col>
            <Col lg={3} sm={6}>
                <div className="follow_box">
                    <div className="follow_point">

                    </div>
                    <div className="dotet"></div>
                    <h3>Design</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                </div>
            </Col>
            <Col lg={3} sm={6}>
                <div className="follow_box">
                    <div className="follow_point">

                    </div>
                    <div className="dotet"></div>
                    <h3>Development</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Follow
