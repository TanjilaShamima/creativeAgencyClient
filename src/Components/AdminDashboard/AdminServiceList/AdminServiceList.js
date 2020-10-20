import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import DashboardHeader from '../../Shared/DashboardHeader/DashboardHeader';
import OrderListItem from '../OrderListItem/OrderListItem';

const AdminServiceList = ({services}) => {
    const [servicesOrders, setServiceOrders] = useState([]);
    
    useEffect(() => {
        const fetchOpertaion = async () => {
            await fetch('https://vast-lake-13372.herokuapp.com/getOrders',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                data.map(order => {
                    const servicesList =  [...services];
                    const seletedService =  servicesList.filter(srvc => srvc._id === order.serviceId)[0];
                    order.serviceName = seletedService.serviceName;
                    return order;
                })

                setServiceOrders(data);
            })
            .catch(err => console.log(err.message));
        }
        fetchOpertaion();
    }, [services]);

    return (
        <div>
            <DashboardHeader displayOption="Service List"></DashboardHeader>
            <Table className="text-center rounded m-2 bg-white p-3" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Service Name</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        servicesOrders.map(order => <OrderListItem data={order} key={order._id}></OrderListItem>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        services: state.services
    }
}

export default connect(mapStateToProps)(AdminServiceList);