
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const LoginPage = () => {
    const { signIn } = use(AuthContext);
    const handelLogIn = (event) => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log({ email, password });

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage);
            });
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 ">
                <div className="px-10 space-y-5">
                    <h2 className='font-bold text-2xl text-center'>Login your account</h2>
                    <hr className=' px-10 text-base-300' />
                </div>
                <form onSubmit={handelLogIn} className="card-body">
                    <fieldset className="fieldset">
                        {/* email  */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" />
                        {/* password  */}
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='font-bold text-center mt-4 '>Dont’t Have An Account ? <Link className='text-secondary' to={'/auth/register'}>Register</Link> </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;