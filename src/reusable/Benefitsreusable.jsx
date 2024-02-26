import React from 'react'
import { Col } from 'react-bootstrap'

const Benefitsreusable = ({beneicon,title,benepp}) => {
  return (
     <>
      <Col lg={4}>
            <div className="banefit_box_prt">
                <i>{beneicon}</i>
                <h2>{title}</h2>
                <p>{benepp}</p>
            </div>
      </Col>
     </>
  )
}

export default Benefitsreusable
