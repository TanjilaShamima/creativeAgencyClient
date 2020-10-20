import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchOrderData } from '../../../Redux/AgencyActions/AgencyActions';
import DashboardHeader from '../../Shared/DashboardHeader/DashboardHeader';
import ConsumedItem from '../ConsumedItem/ConsumedItem';

const ServiceConsumed = ({consumedServices, fetchOrderData, user, services}) => {
    const userEmail = user.email;
    
    useEffect(() => {
        const fetchOpertaion = async () => {
            await fetch(`https://vast-lake-13372.herokuapp.com/getOrdersFor?user=${userEmail}`,{
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
                    order.photo = seletedService.photo;
                    order.serviceDesc = seletedService.serviceDesc;
                    if(order.serviceStatus === 'pending'){
                        order.btnBg = 'info';
                    }
                    else if(order.serviceStatus === 'running'){
                        order.btnBg = 'warning';
                    }
                    else if(order.serviceStatus === 'done'){
                        order.btnBg = 'success';
                    }
                    else if(order.serviceStatus === 'rejected'){
                        order.btnBg = 'danger'
                    }
                    else{
                        order.btnBg = 'dark'
                    }
                    return order;
                })

                fetchOrderData(data);
            })
            .catch(err => console.log(err.message));
        }
        fetchOpertaion();
    }, [services, userEmail, fetchOrderData]);

    return (
        <>
            <DashboardHeader displayOption="Service Consumed"></DashboardHeader>
            <Row className="p-5 justify-content-around">
                {
                    consumedServices.map(consumed => <ConsumedItem data={consumed} key={consumed._id}></ConsumedItem>)
                }
            </Row>
        </>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user,
        services: state.services,
        consumedServices: state.orders
    }
}

const mapDispatchToProps = {
    fetchOrderData : fetchOrderData
}
export default connect(mapStateToProps, mapDispatchToProps)(ServiceConsumed);