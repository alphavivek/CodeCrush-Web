import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addRequest } from '../utils/requestSlice';

const Requests = () => {
    const requests = useSelector((store) => store.requests);
    const dispatch = useDispatch();

    const fetchRequests = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/requests/received", {
                withCredentials: true,
            });
            console.log(res.data?.data);
            dispatch(addRequest(res.data?.data));
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, []);

    if (!requests) return;

    if (requests.length == 0) return <h1>No Requests Found</h1>

    return (
        <div className='text-center my-10'>
            <h1 className='font-bold text-2xl'>Requests</h1>
            {requests.map((requests) => {
                const { _id, firstName, lastName, gender, age, about, photoUrl } = requests.fromUserId;

                return (
                    <div key={_id} className='flex justify-between items-center bg-base-200 m-4 p-4 rounded-lg w-2/3 mx-auto'>
                        <div>
                            <img src={photoUrl || "https://www.pngall.com/wp-content/uploads/5/Profile-Male-Transparent.png"} alt="photo"
                                className='w-20 h-20 rounded-full'
                            />
                        </div>
                        <div className='mx-4 text-left'>
                            <h2 className='font-bold text-xl'>{firstName + " " + lastName}</h2>
                            {age && gender && <p>{age + ", " + gender}</p>}
                            <p>{about}</p>
                        </div>
                        <div>
                            <button className="btn btn-primary mx-2">Reject</button>
                            <button className="btn btn-secondary mx-2">Accept</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Requests