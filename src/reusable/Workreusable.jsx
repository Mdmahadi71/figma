import React from 'react'
import {Col, Row} from 'react-bootstrap'

const Workreusable = ({mahadi ,para,workimg}) => {
  return (
    <div>
      <Row>
      <Col lg={8} >
        <Row>
     <div className="all">
     <img src={workimg } className='w-20%' alt="" />
            <h3>{mahadi}</h3>
        <p>{para}</p>
     </div>
        </Row>
     </Col>
      </Row>
    </div>
  )
}

export default Workreusable
