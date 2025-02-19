import React, { useState } from 'react'

const Login = () => {
    const [emailId, setEmailId] =  useState('');
    const [password, setPassword] =  useState('');

    function handleSubmit() {
        
    }

    return (
        <div className='flex justify-center my-10'>
            <div className="card bg-base-300 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center">Login</h2>

                    {/* Add input fields */}
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Email ID</span>
                            </div>
                            <input
                                value={emailId}
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setEmailId(e.target.value)}
                            />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Password</span>
                            </div>
                            <input
                                value={password}
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e)=> setPassword(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={handleSubmit()}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
