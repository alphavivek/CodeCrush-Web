import React from 'react'
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

const UserCard = ({ user }) => {
    // console.log("UserCard", user);
    const { _id, firstName, lastName, age, gender, about, photoUrl } = user;
    const dispatch = useDispatch();

    const handleSendRequest = async (status, userId) => {
        try {
            const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + userId,
                {},
                {
                    withCredentials: true,
                },
            );
            console.log("handleSubmit ", res);
            dispatch(removeUserFromFeed(userId));
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            {/* {user.map((user) => (
                <div className="card bg-base-300 w-96 shadow-xl my-5">
                    <figure>
                        <img
                            src={user?.photoUrl || "https://www.pngall.com/wp-content/uploads/5/Profile-Male-Transparent.png"}
                            alt="photo" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{user?.firstName + " " + user?.lastName}</h2>
                        <p>{user?.about}</p>
                        <div className="card-actions justify-center my-5">
                            <button className="btn btn-primary">Ingore</button>
                            <button className="btn btn-secondary">Interested</button>
                        </div>
                    </div>
                </div>
            ))} */}

            <div className="card bg-base-300 w-96 shadow-xl my-5">
                <figure>
                    <img
                        src={photoUrl || "https://www.pngall.com/wp-content/uploads/5/Profile-Male-Transparent.png"}
                        alt="photo" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{firstName + " " + lastName}</h2>
                    {user?.age && user?.gender && <p>{age + ", " + gender}</p>}
                    <p>{about}</p>
                    <div className="card-actions justify-center my-5">
                        <button className="btn btn-primary"
                            onClick={() => handleSendRequest("ignored", _id)}
                        >
                            Ingore
                        </button>
                        <button className="btn btn-secondary"
                            onClick={() => handleSendRequest("interested", _id)}
                        >
                            Interested</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard;