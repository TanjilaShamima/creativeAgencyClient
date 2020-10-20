import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const clientBrands = [
    { 
        name: 'google',
        brandIcon: '/images/logos/google.png'
    },
    { 
        name: 'slack',
        brandIcon: '/images/logos/slack.png'
    },
    { 
        name: 'airbnb',
        brandIcon: '/images/logos/airbnb.png'
    },
    { 
        name: 'uber',
        brandIcon: '/images/logos/uber.png'
    },
    { 
        name: 'netflix',
        brandIcon: '/images/logos/netflix.png'
    }
]

const ClientBrands = () => {
    return (
        <Container className="my-3">
            <Row className="align-items-center justify-content-around text-center">
                {
                    clientBrands.map((brand, idx) => 
                    <Col key={idx} md={2} className="m-1">
                        <Image width={130} src={brand.brandIcon} alt={brand.name} fluid />
                    </Col>)   
                }
            </Row>
        </Container>
    );
};

export default ClientBrands;