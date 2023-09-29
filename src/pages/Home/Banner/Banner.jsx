import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='md:flex items-center gap-10 mt-10'>
                        <div className='md:mt-10'>
                            <h1 className="text-5xl font-bold">E<span className='text-red-600 font-bold'>X</span>PERT LAB</h1>
                            <p className="py-6 text-xl">E<span className='text-red-600'>x</span>pert Lab is an innovative edtech leader and the best skill development and also the best freelancing institute in Bangladesh. The journey of E<span className='text-red-600'>x</span>pert Lab started in 2018 with a big dream to bring applied education to the mass population at an affordable cost, breaking the barriers to quality education and distance learning.</p>
                            <button className="btn btn-primary"><Link to='/allcourse'>All Courses</Link></button>
                        </div>
                        <img src="https://i.ibb.co/Zh0hnpm/hero-codeman-BD-min-min.png" className="h-3/4 w-3/4 md:mt-10 md:flex items-center" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;