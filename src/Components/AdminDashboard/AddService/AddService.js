import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { fetchServicesSuccess } from '../../../Redux/AgencyActions/AgencyActions';
import DashboardHeader from '../../Shared/DashboardHeader/DashboardHeader';

const AddService = ({services, fetchServicesSuccess}) => {
    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = data => {
        const serviceData = new FormData();
        serviceData.append('serviceName', data.servicename);
        serviceData.append('serviceDesc', data.servicedescription);
        serviceData.append('serviceBanner', data.servicebanner[0]);


        fetch('https://vast-lake-13372.herokuapp.com/addService', {
            method: 'POST',
            body: serviceData
        })
        .then(res => res.json())
        .then(doc => {
            console.log(doc);
            if(doc){
                const addNewService = [doc, ...services];
                fetchServicesSuccess(addNewService);
                reset();
            }
        })

    }

    return (
        <>
            <DashboardHeader displayOption="Add Service"></DashboardHeader>
            <form className="p-5 bg-white rounded m-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group row">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="servicename">Service Name</label>
                                <input type="text" ref={register({ required: true })} name="servicename" placeholder="Name" className="form-control form-control-lg"/>
                                {errors.servicename && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Service Description</label>
                                <textarea rows={5} ref={register({ required: true })} name="servicedescription" placeholder="Description" className="form-control form-control-lg"/>
                                {errors.servicedescription && <span className="text-danger">This field is required</span>}
                            </div>
                        </div>
                        <div className="col-6">
                            <label htmlFor="projectfile">Service File</label>
                            <button className="btn btn-outline-success btn-block"><input ref={register({ required: true })} name="servicebanner" className="form-control bg-transparent" placeholder="Upload project file" type="file" /></button>
                            {errors.servicebanner && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-dark px-5">Send</button>
                    </div>
                </form>
        </>
    );
};

const mapStateToProps = state => {
    return {
        services: state.services
    }
}

const mapDispatchToProps = {
    fetchServicesSuccess : fetchServicesSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(AddService);