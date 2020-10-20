import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <section className="pt-4 bg-warning">
            <Container>
                <Row>
                    <Col md={6}>
                        <h1>Let us handle your<br/>project, professionally.</h1>
                        <p className="mt-2">
                        <small>With well written codes,we build amazing apps for all platforms,<br/>mobile and web apps in general.</small>
                        </p>
                    </Col>
                    <Col md={6}>
                        <Form>
                            <Form.Group>
                                <Form.Control type="email" placeholder="Your email" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type="text" placeholder="Your name/company name" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control  as="textarea" rows="5" placeholder="Your message" />
                            </Form.Group>
                            <Button variant="dark" type="submit">
                                <div className="px-4">Send</div>
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <p className="mt-5 text-center pb-2 pt-5">
                    <small>copyright Orange labs {(new Date()).getFullYear()}</small>
                </p>
            </Container>
        </section>
    );
};

export default Footer;