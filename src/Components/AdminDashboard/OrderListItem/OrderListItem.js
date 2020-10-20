import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const OrderListItem = ({data}) => {
    const [orderDetails, setOrderDetails] = useState({...data});

    const handleServiceStatusChange = (status, orderId) => {
        const objectStatus = {status}
        fetch(`https://vast-lake-13372.herokuapp.com/updateStatus/${orderId}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(objectStatus)
            })
            .then(res => res.json())
            .then(data => {
                if(data){
                    setOrderDetails({...orderDetails, serviceStatus: status});
                }
            });
    }

    return (
        <tr>
            <td>{orderDetails.name}</td>
            <td>{orderDetails.email}</td>
            <td>{orderDetails.serviceName}</td>
            <td>{orderDetails.orderDescription}</td>
            <td>
                <Form.Control onChange={e => handleServiceStatusChange(e.target.value, data._id)} as="select" defaultValue={orderDetails.serviceStatus}>
                    <option value="pending">Pending</option>
                    <option value="running">Running</option>
                    <option value="done">Done</option>
                    <option value="rejected">Rejected</option>
                </Form.Control>
            </td>
        </tr>
    );
};

export default OrderListItem;