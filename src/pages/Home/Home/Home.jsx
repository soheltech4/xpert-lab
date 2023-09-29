import React from 'react';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet';
import Title from '../../Shared/Title/Title';
import ShowCourse from '../../Show Courses/ShowCourse';
import Courses from '../../Courses/Courses';

const Home = () => {
    return (
        <div>
            <div>
                <Helmet>
                    <title>Expert Lab | Home</title>
                </Helmet>
            </div>
            <Banner></Banner>
            <Title title={"All Courses"}></Title>
            <Courses></Courses>
        </div>
    );
};

export default Home;