import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { defaulftLoggingFramework, handleGoogleSignIn } from './LoginManager';
import { addLoggedinUser } from '../../../Redux/AgencyActions/AgencyActions';

const Login = ({user, addLoggedinUser}) => {

    defaulftLoggingFramework();

    const location = useLocation();
    const history = useHistory();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogle = () => {
        handleGoogleSignIn()
        .then(res => {
            addLoggedinUser(res);
            storeAuthToken();
        })
        .catch(err => console.log(err));
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function(error) {
            // Handle error
          });
    }
    return (
        <>
            <div className="text-center mt-5">
                <Image width={180} src="/images/logos/applogo.png" alt="Group" />
                <div className="p-5 border border-dark bg-white w-50 mx-auto mt-4 rounded" style={{ minHeight: ''}}>
                    <h1 className="font-weight-bold">Login</h1>
		    <p className="py-3">Admin : <span className="text-danger">programming.hero1@gmail.com</span></p>
                    <Button onClick={handleGoogle} variant="outline-secondary" className="mt-5 btn btn-block rounded-pill"><Image className="mx-5" width={22} src="/images/icons/google.png" alt="Google" fluid/><span>Sign In With Google</span></Button>
                    <p className="mt-3">Don't have an account? <Link className="text-primary" role="button" to="/login">Crate an account.</Link></p>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

const mapDispatchToProps = {
    addLoggedinUser: addLoggedinUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);