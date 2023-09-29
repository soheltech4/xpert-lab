import React from 'react';

const Title = ({ title }) => {
    return (
        <div className='place-items-center'>
            <div className="place-items-center">
                <div className="divider"></div>
                <div className="grid text-2xl card place-items-center uppercase">{title}</div>
                <div className="divider"></div>
            </div>
        </div>
    );
};

export default Title;