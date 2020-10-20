import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import { recentWorks } from '../../../FakeData/recentWorks';
import WorkItem from '../WorkItem/WorkItem';
import './RecentWorks.css';

const RecentWorks = () => {
    const [works, setWorks] = useState([]);

    const settings = {
        focusOnSelect: true,
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
      };
    
    useEffect(() => {
        setWorks([...recentWorks]);
    }, []);

    return (
        <section style={{height: '600px'}} className="my-auto bg-dark d-flex align-items-center justify-content-center"> 
            <Container fluid>
                <Row>
                    <Col md={12} className="text-center">
                        <h1 className="text-white mb-5">Here are some of <span className="text-brand">our works</span></h1>
                        <Slider {...settings}>
                            {
                                works.map(wrk => <WorkItem data={wrk} key={wrk.id}></WorkItem>)
                            }
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default RecentWorks;