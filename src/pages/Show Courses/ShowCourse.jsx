import React from 'react';

const ShowCourse = ({ course }) => {
    const { id, title, description, rating, instructor, image, totalStudents } = course
    return (
        <div>
            <div className="h-[480px] w-96 glass rounded-lg">
                <figure><img className='h-[255px] rounded' src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-red font-bold">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-between items-center">
                    <label>Course Rating: <span className='text-yellow-400 text-bold'>{rating}</span></label>
                        <button className="btn btn-primary">Add Class</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCourse;