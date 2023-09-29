import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Covered/Cover';
import ShowCourse from '../../Show Courses/ShowCourse';
import Courses from '../../Courses/Courses';

const AllCourse = () => {
    return (
        <div>
            <Helmet>
                <title>Expert Lab | All Course</title>
            </Helmet>
            <div className='mb-20'>
            <Cover img={"https://i.ibb.co/6DJ59xh/fdfdfdf.jpg"} title={"All Courses"}></Cover>
        </div>
        <Courses></Courses>
        </div >
    );
};

export default AllCourse;