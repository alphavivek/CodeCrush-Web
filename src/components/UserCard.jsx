import React from 'react'

const UserCard = ({ user }) => {
    // console.log("UserCard", user);
    return (
        <div>
            {user.map((user) => (
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
            ))}
        </div>
    )
}

export default UserCard