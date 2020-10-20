import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';

const ConsumedItem = ({data}) => {
    const {photo} = data;
    return (
        <>
        <Col style={{ maxWidth: '400px', borderRadius: '20px'}} md={6} className="bg-white my-2 p-3">
            <Row className="justify-content-between align-items-center">
                        <Col md={6}>
                            <Image width={80} src={photo} alt={data.name} fluid/>
                        </Col>
                        <Col md={6}>
                            <Button variant={`outline-${data.btnBg}`} className="px-5 font-weight-bold">{data.serviceStatus.toUpperCase()}</Button>
                        </Col>
                    </Row>
            <h5 className="my-2">{data.serviceName}</h5>
            <p><small className="text-secondary">{data.serviceDesc}</small></p>
        </Col>
        </>
    );
};

export default ConsumedItem;