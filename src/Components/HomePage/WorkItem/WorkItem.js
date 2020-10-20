import React from 'react';
import { Image } from 'react-bootstrap';

const WorkItem = ({data}) => {
    return (
        <div>
            <Image width={500} src={data.image} alt={data.name} fluid />
        </div>
    );
};

export default WorkItem;