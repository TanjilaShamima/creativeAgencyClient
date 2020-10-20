import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Header from '../Header/Header';
import RecentWorks from '../RecentWorks/RecentWorks';
import ServiceContainer from '../ServiceContainer/ServiceContainer';

const HomeIndex = () => {
    return (
        <>
        <header>
            <Header></Header>
        </header>
        <main>
            <ServiceContainer></ServiceContainer>
            <RecentWorks></RecentWorks>
            <ClientFeedback></ClientFeedback>
        </main>
        <Footer></Footer>
        </>
    );
};

export default HomeIndex;