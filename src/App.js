import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeIndex from './Components/HomePage/HomeIndex/HomeIndex';
import { fetchReviewData, fetchServicesData, fetchServicesFailure, fetchServicesSuccess } from './Redux/AgencyActions/AgencyActions';
import { connect } from 'react-redux';
import Login from './Components/Shared/Login/Login';
import DashboardNav from './Components/Shared/DashboardNav/DashboardNav';
import PrivateRoute from './Components/Shared/PrivateRoute/PrivateRoute';

function App({fetchServicesData, fetchServicesSuccess, fetchReviewData, fetchServicesFailure}) {

  useEffect(() => {
    const fetchServiceOpertaion = async () => {
      fetchServicesData();
      await fetch('https://vast-lake-13372.herokuapp.com/getServices')
      .then(res => res.json())
      .then(data =>{
          fetchServicesSuccess(data ? data : []);
        });
      }

      const fetchReviewOpertaion = async () => {
        await fetch('https://vast-lake-13372.herokuapp.com/getReviews')
        .then(res => res.json())
        .then(data =>{
          fetchReviewData(data ? data : []);
          })
        }
      fetchServiceOpertaion();
      fetchReviewOpertaion();
  }, [fetchServicesSuccess, fetchServicesData, fetchReviewData, fetchServicesFailure]);

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <HomeIndex></HomeIndex>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/dashboard">
            <DashboardNav></DashboardNav>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/:serviceId">
            <DashboardNav></DashboardNav>
          </PrivateRoute>
        </Switch>
    </Router>
  );
}
const mapStateToProps = state => {
  return {
    services: state.services
  }
}

const mapDispatchToProps = {
  fetchServicesData : fetchServicesData,
  fetchServicesSuccess : fetchServicesSuccess,
  fetchServicesFailure : fetchServicesFailure,
  fetchReviewData: fetchReviewData
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
