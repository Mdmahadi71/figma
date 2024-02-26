import React from 'react'
import './blog.css'
import { Container, Row,Col } from 'react-bootstrap'
import Blogreusable from '../../reusable/Blogreusable'
import bimgone from '../../assets/blogfst.png'
import bimgsnd from '../../assets/blogsdn.png'
import bimglst from '../../assets/bloglst.png'
import { FaLongArrowAltRight } from "react-icons/fa";

const Blog = () => {
  return (
    <div className='blog_mm'>
      <Container>
            <Row>
                <Col lg={4}>
                    <div className="blog_main">
                    <h2>Our blog</h2>
                    </div>
                </Col>
            </Row>
        <Row>
            <Blogreusable bimg={bimgone} title='19 Jan 2022'  mahadi='How one Webflow user grew his single person consultancy from $0-100K in 14 months' bppp='See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract' last='Read More ' />
            <Blogreusable bimg={bimgsnd} title='19 Jan 2022'  mahadi='How one Webflow user grew his single person consultancy from $0-100K in 14 months' bppp='See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract' last='Read More ' />
            <Blogreusable bimg={bimglst} title='19 Jan 2022'  mahadi='How one Webflow user grew his single person consultancy from $0-100K in 14 months' bppp='See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'  last='Read More '/>
        </Row>
      </Container>
    </div>
  )
}

export default Blog
