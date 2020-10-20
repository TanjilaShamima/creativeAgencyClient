import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { fetchReviewData } from '../../../Redux/AgencyActions/AgencyActions';
import DashboardHeader from '../../Shared/DashboardHeader/DashboardHeader';

const GiveReview = ({user, reviews, fetchReviewData}) => {

    const { register, handleSubmit, errors, reset } = useForm();
    const onSubmit = (data, e) => {
        e.preventDefault();
        data.photoUrl = user.photoURL;
        fetch('https://vast-lake-13372.herokuapp.com/postReview',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(doc => {
            if(doc) {
                const addNewReview = [doc, ...reviews];
                fetchReviewData(reviews.length > 2 ? addNewReview.slice(0,3) : addNewReview);
                reset({name: user.name})
            }
        });
    }

    return (
        <div>
            <DashboardHeader displayOption="Review"></DashboardHeader>
            <form className="p-5 m-2 bg-white rounded" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your name" className="form-control form-control-lg" defaultValue={user.name} readOnly={true}/>
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="designation" placeholder="Comapany name, designation" className="form-control form-control-lg" />
                        {errors.designation && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <textarea rows={5} ref={register({ required: true })} name="reviewDescription" placeholder="Description" className="form-control form-control-lg"/>
                        {errors.reviewDescription && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-dark px-5">Send</button>
                    </div>
                </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user,
        reviews: state.reviews
    }
}

const mapDispatchToProps = {
    fetchReviewData : fetchReviewData
}
export default connect(mapStateToProps, mapDispatchToProps)(GiveReview);