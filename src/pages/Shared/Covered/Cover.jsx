import React from 'react';

const Cover = ({img, title}) => {
    return (
        <div>
            <div className="hero h-[350px] " style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md bg-purple-600 bg-opacity-60 rounded pt-5 pl-20 pr-20">
                        <h1 className="mb-5 text-3xl font-bold text-white">{title}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;