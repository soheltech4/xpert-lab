import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {

const {createUser} = useContext(AuthContext)

    const handleSignup = event => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                const LoggedUser = result.user
                console.log(LoggedUser)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Signup Is Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
    }


    return (
        <div className=''>
            <Helmet>
                <title>Expert Lab | Signup</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left md:w-1/2">
                        <h1 className="text-3xl font-bold">Please Signup</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm ">
                        <form onSubmit={handleSignup} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' required placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="Password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Signup" />
                            </div>
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="divider">OR</div>
                            </div>
                        </form>
                        <p className='text-center'> Have an Account ? Please <small className='text-center text-blue-400'><Link to="/login">Login</Link></small> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;