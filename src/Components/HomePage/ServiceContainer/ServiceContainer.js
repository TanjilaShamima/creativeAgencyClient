import React from 'react';
import { CardDeck, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import ServiceItem from '../ServiceItem/ServiceItem';

const ServiceContainer = ({loading, services}) => {
    return (
        <>
        <section className="mt-5 d-flex justify-content-center align-items-center">
            <div>
                <h1 className="text-center">Provide awesome <span className="text-brand">services</span></h1>
                <Container>
                    <Row  className="py-5">
                        <CardDeck>
                        {
                            services.map(srvc => <ServiceItem key={srvc._id} data={srvc}></ServiceItem>)
                        }
                        </CardDeck>
                    </Row>
                </Container>
                <div className="text-center">
                    <BeatLoader
                        size={50}
                        color={"#123abc"}
                        loading={loading}
                        />
                </div>
            </div>
        </section>
        </>
    );
};

const mapStateToProps = state => {
    return {
        loading: state.loading,
        services: state.services
    }
}
export default connect(mapStateToProps)(ServiceContainer);