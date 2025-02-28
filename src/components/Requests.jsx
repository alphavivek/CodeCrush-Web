import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addRequests, removeRequest } from '../utils/requestSlice';

const Requests = () => {
    const requests = useSelector((store) => store.requests);
    const dispatch = useDispatch();

    const reviewRequest = async (status, _id) => {
        try {
            const res = await axios.post(BASE_URL + "/request/review/" + status + "/" + _id,
                {},
                {
                    withCredentials: true,
                }
            );
            dispatch(removeRequest(_id));
            console.log("reviewRequest", res);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchRequests = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/requests/received", {
                withCredentials: true,
            });
            console.log("fetchRequests", res.data?.data);
            dispatch(addRequests(res.data?.data));
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, []);

    if (!requests) return;

    if (requests.length == 0) return <h1 className='flex justify-center my-10 font-bold text-xl'>No Requests Found</h1>

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
                            <button className="btn btn-primary mx-2"
                                onClick={() => reviewRequest("rejected", _id)}>
                                Reject
                            </button>
                            <button className="btn btn-secondary mx-2"
                                onClick={() => reviewRequest("accepted", _id)}>
                                Accept
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Requests