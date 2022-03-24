import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BannerPic from '../../../images/logos/Frame.png'
import img1 from '../../../images/logos/google.png'
import img2 from '../../../images/logos/slack.png'
import img3 from '../../../images/logos/netflix.png'
import img4 from '../../../images/logos/uber.png'
import img5 from '../../../images/logos/airbnb.png'



const Banner = () => {
    return (
        <div className='h-50'>

            <Row style={{ backgroundColor: '#FBD062', height: '50%' }} className='h-50% w-52%'>
                <Col className='my-5' xs={5}>
                    <h1>Let’s Grow Your</h1>
                    <h1>Brand To The</h1>
                    <h1> Next Level</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                    </p>
                    <button type="submit">Click Me</button>
                </Col>
                <Col xs={7}>
                    <img src={BannerPic} alt="" />
                </Col>
            </Row>
            <Col className='d-flex'>

                <Row>
                    <img src={img1} alt="" />
                </Row>
                <Row>
                    <img src={img2} alt="" />
                </Row>
                <Row>
                    <img src={img3}  alt="" />
                </Row>
                <Row>
                    <img src={img4}  alt="" />
                </Row>
                <Row>
                    <img src={img5}  alt="" />
                </Row>
            </Col>


        </div>
    );
};

export default Banner;