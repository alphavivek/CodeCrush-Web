import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from './UserCard'

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    try {
      if (feed) return;

      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true
      })
      console.log(res);
      dispatch(addFeed(res?.data?.users));

    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getFeed();
  }, [])

  if(!feed) return; 
  if(feed.length <= 0) return <h1 className='flex justify-center my-10 font-bold text-xl'>No new users found!</h1>;

  return (
    <div className='flex justify-center my-10'>
      {
        feed
        &&
        <UserCard user={feed[0]} />
      }
    </div>
  )
}

export default Feed;