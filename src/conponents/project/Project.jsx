import React from 'react'
import './project.css'
import { Container, Row,Col } from 'react-bootstrap'
import projectimg from '../../assets/projet_img.png'

const Project = () => {
  return (
    <div className='project_main'>
      <Container>
        <Row className='justify-content-center'>
            <Col lg={8} >
                <div className="prj_part_text">
                    <h2>About the project</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <div className="proj_list_prt">
                  <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
                        <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                        <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
                    </ul>
                  </div>
                  <img src={projectimg} className='w-100' alt="" />

                  <h2>How we do it</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <div className="proj_list_prt">
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
                        <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                        <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
                    </ul>
                  </div>
                </div>
            </Col>
        </Row>
        <Row className='justify-content-center'> 
            <Col lg={10} sm={10} xs={10}>
                <div className="keyword">
                    <ul>
                        <li>Keywords</li>
                        <li>Design </li>
                        <li>UI/UX </li>
                        <li>Wireframing</li>
                        <li>Branding</li>
                        <li>Development</li>
                        <li>webflow</li>
                    </ul>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Project
