import React from 'react'
import './contact.css'
import { Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <div className='contact_main'>
      <Container>
        <Row className='justify-content-center '>
            <Col lg={6} className='text-center'>
                <div className="contact_first_text">
                    <h2>Contact Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>

                </div>
            </Col>
        </Row>
        <Row className=' justify-content-center'>
           <Col lg={10}>
           <div className="contact_all">
                <Row className=' justify-content-center'>
                    <Col lg={4} md={4}>
                    <form>
                            <label for="fname">Name</label>
                         </form>
                         <form>
                             <input type="text" id="name" placeholder="Enter your name" name="fname"/>
                         </form>
                    </Col>
                    <Col lg={4} md={4}>
                    <form>
                             <label for="fname">Name</label>
                         </form>
                         <form>
                             <input type="text" id="name" placeholder="Enter your name" name="fname"/>
                         </form>
                    </Col>
                </Row>
                <Row className='justify-content-center mmm'>
                    <Col lg={4} md={4}>
                    <form>
                             <label for="name">Subject</label>
                         </form>
                         <form>
                             <input type="text" id="name" placeholder="Provide context" name="fname"/>
                         </form>
                    </Col>
                    <Col lg={4}  md={4}>
                    <form>
                      <label for="fname">Subject</label>
                    </form>
                       <form>
                          <input type="text" id="name" placeholder="Select Subject" name="fname" />
                       </form>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col lg={8} md={8}>
                    <form>
                       <label for="Message" class="w-100">Message</label>
                    </form>
                     <form>
                        <input type="text" id="message" placeholder="Write your question here" name="message"/>
                     </form>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} >
                    <div class="submit_button">
                            <form>
                                <input type="submit" value="Send Messege"/>
                             </form>
                             </div>
                    </Col>
                </Row>
            </div>
           </Col>
        </Row>
      </Container>
      </div>
  )
}

export default Contact
