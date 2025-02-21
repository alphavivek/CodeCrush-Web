import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const user = useSelector(store => store.user)

    return (
        <div className="navbar bg-base-300">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">👩‍💻 CodeCrush</a>
            </div>
            {user && <div className="flex gap-2">
                <p className='mt-1.5'>Welcome, {user.firstName}</p>
                <div className="dropdown dropdown-end ml-2 mr-8">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user.photoUrl} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>}
        </div>
    )
}

export default Navbar