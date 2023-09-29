import React, { useEffect, useState } from 'react';
import ShowCourse from '../Show Courses/ShowCourse';


const Courses = () => {
    const [courses, setCourse] = useState([])

    useEffect(()=> {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourse(data.slice(0,6)))
    }, [])
    return (
        <div className='md:grid grid-cols-3 gap-5 items-center mb-5'>
            {
                courses.map(course=> <ShowCourse 
                    key={course.id} 
                    course={course}
                ></ShowCourse>)
            }
        </div>
    );
};

export default Courses;