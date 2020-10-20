import React from 'react';
import { Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { fetchOrderData } from '../../../Redux/AgencyActions/AgencyActions';
import DashboardHeader from '../../Shared/DashboardHeader/DashboardHeader';

const OrderForm = ({services, user, orders, fetchOrderData, serviceId}) => {
    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = (data, event)=> {
        event.preventDefault();
        delete data.registrationfile;
        data.serviceStatus = 'pending';
        data.ordertime = (new Date()).toDateString();
        fetch('https://vast-lake-13372.herokuapp.com/order',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(doc => {
            if(doc) {
                const servicesList =  [...services];
                const seletedService =  servicesList.filter(srvc => srvc._id === doc.serviceId)[0];
                doc.serviceName = seletedService.serviceName;
                doc.photo = seletedService.photo;
                doc.serviceDesc = seletedService.serviceDesc;
                if(doc.serviceStatus === 'pending'){
                    doc.btnBg = 'info';
                }
                else if(doc.serviceStatus === 'running'){
                    doc.btnBg = 'warning';
                }
                else if(doc.serviceStatus === 'done'){
                    doc.btnBg = 'success';
                }
                else if(doc.serviceStatus === 'rejected'){
                    doc.btnBg = 'danger'
                }
                else{
                    doc.btnBg = 'dark'
                }
                const addNewOrder = [doc, ...orders];
                fetchOrderData(addNewOrder);
                reset({name: user.name, email: user.email})
            }
        });
    }
    return (
        <>
            <DashboardHeader displayOption="Order"></DashboardHeader>
            <Col>
                <form className="p-5 m-2 bg-white rounded" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your name / Company name" className="form-control form-control-lg" defaultValue={user.name} readOnly={true}/>
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="email" ref={register({ required: true })} name="email" placeholder="Your email" className="form-control form-control-lg" defaultValue={user.email} readOnly={true}/>
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    {
                        serviceId ?
                        <div className="form-group">
                            <select className="form-control form-control-lg" defaultValue={serviceId} name="serviceId" ref={register({ required: true })} readonly="true">
                                {
                                    services && services.map(srvc => {
                                        return <option key={srvc._id} value={srvc._id}>{srvc.serviceName}</option>
                                    })
                                }
                            </select>
                            {errors.serviceId && <span className="text-danger">This field is required</span>}
                        </div>
                        :
                        <div className="form-group">
                            <select className="form-control form-control-lg" name="serviceId" ref={register({ required: true })} >
                                {
                                    services && services.map(srvc => {
                                        return <option key={srvc._id} value={srvc._id}>{srvc.serviceName}</option>
                                    })
                                }
                            </select>
                            {errors.serviceId && <span className="text-danger">This field is required</span>}
                        </div>
                    }
                    <div className="form-group">
                        <textarea rows={5} ref={register({ required: true })} name="orderDescription" placeholder="Project description" className="form-control form-control-lg"/>
                        {errors.orderDescription && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row">
                        <div className="col-6">
                            <input ref={register({ required: true })} className="form-control form-control-lg" type="number" name="price" placeholder="Price" />
                            {errors.price && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-6">
                            <button className="btn btn-outline-success btn-block"><input ref={register({ required: true })} name="registrationfile" className="form-control bg-transparent" placeholder="Upload project file" type="file" /></button>
                            {errors.registrationfile && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-dark px-5">Send</button>
                    </div>
                </form>
            </Col>
        </>
    );
};
const mapStateToProps = state => {
    return{
        services: state.services,
        user: state.user,
        orders: state.orders
    }
}

const mapDispatchToProps = {
    fetchOrderData : fetchOrderData
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);