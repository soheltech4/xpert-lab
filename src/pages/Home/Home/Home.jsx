import React from 'react';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <div>
                <Helmet>
                    <title>Expert Lab | Home</title>
                </Helmet>
            </div>
            <Banner></Banner>
        </div>
    );
};

export default Home;