import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Blogreusable = ({bimg,title,mahadi,bppp ,last}) => {
  return (
    <Col lg={4}>
         <div className="b_main">
            <img src={bimg} className='w-100' alt="" />
            <h4>{title}</h4>
            <h2>{mahadi}</h2>
            <p>{bppp}</p>
            <Link to={'/read'}>{last}</Link>
         </div>
    </Col>
  )
}

export default Blogreusable
