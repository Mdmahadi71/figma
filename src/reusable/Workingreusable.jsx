import React from 'react'
import { Col } from 'react-bootstrap'

const Workingreusable = ({title,worpp,wrkicon}) => {
  return (
    <Col lg={4} md={4} >
        <div className="working_text">
             <i>{wrkicon}</i>
            <h2>{title}</h2>
            <p>{worpp}</p>
        </div>
    </Col>
  )
}

export default Workingreusable
