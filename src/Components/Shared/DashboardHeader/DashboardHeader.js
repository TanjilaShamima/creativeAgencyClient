import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

const DashboardHeader = ({displayOption, user}) => {
    return (
        <div>
            <Row className="justify-content-between py-3 bg-light">
                <Col md={6}>
                    <h4 className="px-2">{displayOption}</h4>
                </Col>
                <Col md={6}>
                    <h4 className="text-right px-5">{user.name} <span className="text-danger">({user.role === 'admin' ? 'Admin' : 'User'})</span></h4>
                </Col>
            </Row>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(DashboardHeader);