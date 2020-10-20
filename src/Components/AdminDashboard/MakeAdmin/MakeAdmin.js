import React from 'react';
import { useForm } from 'react-hook-form';
import DashboardHeader from '../../Shared/DashboardHeader/DashboardHeader';

const MakeAdmin = () => {
    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = data => {
        fetch('https://vast-lake-13372.herokuapp.com/adminEntry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.status === 'success') {
                reset();
            }
        });
    }
    return (
        <>
        <DashboardHeader displayOption="Make Admin"></DashboardHeader>

        <form className="p-5 bg-white m-2 rounded" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <input type="email" ref={register({ required: true })} name="adminEmail" placeholder="Enter email" className="form-control form-control-lg"/>
                {errors.adminEmail && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group text-right">
                <button type="submit" className="btn btn-dark px-5">Send</button>
            </div>
        </form>
        </>
    );
};

export default MakeAdmin;