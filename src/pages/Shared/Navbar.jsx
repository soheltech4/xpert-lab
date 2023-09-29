import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const NavBar = 
    <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allcourse'>All Course</Link></li>
        <li><Link to='/AllInstructor'>All Instructor</Link></li>
    </>

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavBar}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">E<span className='text-red-600 font-bold'>X</span>PERT LAB</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavBar}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;