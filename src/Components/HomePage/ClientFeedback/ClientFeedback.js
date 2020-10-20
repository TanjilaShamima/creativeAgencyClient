import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import ReviewItem from '../ReviewItem/ReviewItem';

const ClientFeedback = ({reviews}) => {
    return (
        <section className="my-auto py-5 d-flex justify-content-center align-items-center">
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center">Clients <span className="text-brand">Feedback</span></h1>
                    </Col>
                </Row>
                <Row className="mt-5">
                    {
                        reviews && reviews.map(review => <ReviewItem data={review} key={review._id}></ReviewItem>)
                    }
                </Row>
            </Container>
        </section>
    );
};

const mapStateToProps = state => {
    return {
        reviews: state.reviews
    }
}
export default connect(mapStateToProps)(ClientFeedback);