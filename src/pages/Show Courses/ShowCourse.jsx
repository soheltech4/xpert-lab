import React from 'react';

const ShowCourse = ({ course }) => {
    const { id, title, description, rating, instructor, image, totalStudents } = course
    return (
        <div>
            <div className="card w-96 glass">
                <figure><img className='h-[255px] rounded' src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCourse;