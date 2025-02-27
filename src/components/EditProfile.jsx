import React, { useState } from 'react'
import UserCard from './UserCard';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const EditProfile = ({ user }) => {
    const [firstName, setFirstName] = useState(user?.firstName);
    const [lastName, setLastName] = useState(user?.lastName);
    const [gender, setGender] = useState(user?.gender);
    const [age, setAge] = useState(user?.age);
    const [about, setAbout] = useState(user?.about);
    const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
    const [toast, setToast] = useState(false);
    const [error, setError] = useState("");

    const dispatch = useDispatch();

    const saveProfile = async () => {
        setError("");
        try {
            const res = await axios.patch(BASE_URL + "/profile/edit",
                {
                    firstName, lastName, gender, age, about, photoUrl
                },
                {
                    withCredentials: true
                }
            );

            dispatch(addUser(res?.data?.data));
            setToast(true);
            setTimeout(() => {
                setToast(false);
            }, 3000);
        } catch (err) {
            setError(err.response.data);
        }
    };

    return (
        <>
            {toast && (
                <div className="toast toast-top toast-center z-10">
                    <div className="alert alert-success">
                        <span>Profile updated successfully!!😁</span>
                    </div>
                </div>
            )}

            <div className='flex justify-center'>
                <div className='flex justify-center my-5 mx-10'>
                    <div className="card bg-base-300 w-96 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title justify-center">Edit Profile</h2>

                            {/* Add input fields */}
                            <div>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">First Name:</span>
                                    </div>
                                    <input
                                        value={firstName}
                                        type="text"
                                        placeholder="Enter your first name"
                                        className="input input-bordered w-full max-w-xs"
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Last Name:</span>
                                    </div>
                                    <input
                                        value={lastName}
                                        type="text"
                                        placeholder="Enter your last name"
                                        className="input input-bordered w-full max-w-xs"
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Photo URL:</span>
                                    </div>
                                    <input
                                        value={photoUrl}
                                        type="text"
                                        placeholder="Enter your photo url"
                                        className="input input-bordered w-full max-w-xs"
                                        onChange={(e) => setPhotoUrl(e.target.value)}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Age:</span>
                                    </div>
                                    <input
                                        value={age}
                                        type="text"
                                        placeholder="Enter your age"
                                        className="input input-bordered w-full max-w-xs"
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Gender:</span>
                                    </div>
                                    <select
                                        className="select select-bordered w-full max-w-xs"
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    >
                                        <option disabled value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">About:</span>
                                    </div>
                                    <textarea
                                        value={about}
                                        type="text"
                                        className="textarea textarea-bordered"
                                        placeholder="About"
                                        onChange={(e) => setAbout(e.target.value)}
                                    ></textarea>
                                </label>

                            </div>

                            <p className='text-red-500 '>{error}</p>

                            <div className="card-actions justify-center">
                                <button className="btn btn-primary" onClick={saveProfile}>
                                    Save Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <UserCard user={{ firstName, lastName, gender, age, about, photoUrl }} />
            </div>
        </>
    )
}

export default EditProfile