import React from 'react';
import TitleBar from '../../Shared/TitleBar/TitleBar';
import ClientBrands from '../ClientBrands/ClientBrands';
import TopBanner from '../TopBanner/TopBanner';
import './Header.css';

const Header = () => {
    return (
        <>
        <div className="top-header">
            <TitleBar></TitleBar>
            <TopBanner></TopBanner>
        </div>
        <ClientBrands></ClientBrands>
        </>
    );
};

export default Header;