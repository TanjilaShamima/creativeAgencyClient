import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopBanner = () => {
    return (
        <main className="my-5">
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col md={6}>
                        <h1 className="display-5 font-weight-bold">Let’s Grow Your<br/> Brand To The<br/>Next Level</h1>
                        <p className="w-75"><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum vero est unde natus odio, omnis doloremque ab quasi obcaecati!</small></p>
                        <Button as={Link} to={`/dashboard`} className="font-weight-bold" variant="dark"><div className="px-4">Hire Us</div></Button>
                    </Col>
                    <Col md={6}>
                        <Image src="/images/logos/Frame.png" alt="Frame" fluid />
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default TopBanner;