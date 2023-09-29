import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Covered/Cover';

const AllCourse = () => {
    return (
        <div>
            <Helmet>
                <title>Expert Lab | All Course</title>
            </Helmet>
            <div>
            <Cover img={"https://i.ibb.co/6DJ59xh/fdfdfdf.jpg"} title={"All Courses"}></Cover>
        </div>
        </div >
    );
};

export default AllCourse;