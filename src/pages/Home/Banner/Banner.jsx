import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='md:flex items-center gap-10'>
                        <div className=''>
                            <h1 className="text-5xl font-bold"><span className='text-red-800 font-bold'>X</span>PERT LAB</h1>
                            <p className="py-6 text-lg"><span className='text-red-800'>X</span>pert Lab is an innovative edtech leader and the best skill development and also the best freelancing institute in Bangladesh. The journey of <span className='text-red-800'>X</span>pert Lab started in 2018 with a big dream to bring applied education to the mass population at an affordable cost, breaking the barriers to quality education and distance learning.</p>
                            <button className="btn btn-primary">All Courses</button>
                        </div>
                        <img src="https://i.ibb.co/Zh0hnpm/hero-codeman-BD-min-min.png" className="h-3/4 w-3/4" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;