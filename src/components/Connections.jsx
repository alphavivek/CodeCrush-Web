import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnection } from '../utils/connectionSlice'

const Connections = () => {
    const dispatch = useDispatch();
    const connections = useSelector((store) => store.connections);

    const fetchConnections = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/connections", {
                withCredentials: true,
            })
            console.log(res.data?.data);
            dispatch(addConnection(res.data?.data));
        }
        catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchConnections();
    }, []);

    if (!connections) return;
    if (connections.length == 0) {
        return (
            <div className='flex flex-col justify-center items-center my-10'>
                <h1 className='my-10 font-bold text-xl'>No Connections Found</h1>
                <img className='w-20 h-20'
                src={"../No_Connections_Found.png"} alt="image" />
            </div>
        )
    };

    return (
        <div className='text-center my-10'>
            <h1 className='font-bold text-2xl'>Connections</h1>
            {connections.map((connection) => {
                const { _id, firstName, lastName, gender, age, about, photoUrl } = connection;

                return (
                    <div key={_id} className='flex items-center bg-base-200 m-4 p-4 rounded-lg w-1/2 mx-auto'>
                        <div>
                            <img src={photoUrl || "https://www.pngall.com/wp-content/uploads/5/Profile-Male-Transparent.png"} alt="photo"
                                className='w-20 h-20 rounded-full'
                            />
                        </div>
                        <div className='mx-6 text-left'>
                            <h2 className='font-bold text-xl'>{firstName + " " + lastName}</h2>
                            {age && gender && <p>{age + ", " + gender}</p>}
                            <p>{about}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Connections;