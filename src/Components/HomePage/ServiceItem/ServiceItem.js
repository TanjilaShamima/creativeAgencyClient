import { motion } from 'framer-motion';
import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceItem = ({data}) => {
    const {photo} = data;
    return (
        <>
            <Col md={4} sm={6}>
                <Link to={`/dashboard/${data._id}`} className="text-decoration-none">
                <motion.div whileHover={{scale: 1.1, boxShadow: "0px 0px 20px lightgray"}} className="text-center rounded p-1"> 
                    <div className="p-3 m-1">
                        <Image width={100} src={photo} alt={data.name} fluid />
                        <h3 className="mt-3">{data.serviceName}</h3>
                        <p className="text-secondary"><small>{data.serviceDesc}</small></p>
                    </div>
                </motion.div>
                </Link>
            </Col>
        </>
    );
};

export default ServiceItem;