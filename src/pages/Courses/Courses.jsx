import React, { useEffect, useState } from 'react';
import ShowCourse from '../Show Courses/ShowCourse';


const Courses = () => {
    const [courses, setCourse] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourse(data))
    }, [])
    return (
        <div className='md:grid grid-cols-3 gap-5 items-center px-2 py-5 mb-5'>
            {
                courses.map(course=> <ShowCourse 
                    key={course._id} 
                    course={course}
                ></ShowCourse>)
            }
        </div>
    );
};

export default Courses;