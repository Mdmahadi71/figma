import React from 'react'
import { Container, } from 'react-bootstrap'
import {Navbar,Nav} from 'react-bootstrap'
import logo from '../../assets/navlogo.png'
import './manubar.css'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom'
const Manubar = () => {
  return (
    <div>
       <Navbar expand="lg" className='main_manu' >
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="<FaBars />" className='mhb' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About us</Link>
            <Link to={'/features'}>Features</Link>
            <Link to={'/pricing'}>Pricing</Link>
            <Link to={'/read'}>Read</Link>
            <Link to={'/blog'}>Blog</Link>
            <Link to={'/work'}>Work</Link>
          </Nav>
        </Navbar.Collapse>
        <div className="con">
        <Link to={'/contact'}>Contact us</Link>
        </div>
      </Container>
    </Navbar>
    </div>
  )
}

export default Manubar
