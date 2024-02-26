import React from 'react'
import {Col } from 'react-bootstrap'

const Featuresreusable = ({title ,para,feaicon}) => {
  return (
      <Col lg={4} sm={6} >
            <div className="supp">
                <i>{feaicon}</i>
                <h3>{title}</h3>
                <p>{para}</p>
            </div>
        </Col>
  )
}

export default Featuresreusable
