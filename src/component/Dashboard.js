import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout, selectUser } from '../feature/userSlice';
import Todos from './Todos';

const Dashboard = () => {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogout = (e) =>{
        e.preventDefault();
        dispatch(logout());
    }

  return (
      <div>
            <div className='logout'>
                <h1>Welcome <span className='user_name'>{user.name}</span></h1>{" "}
                <button className='logout_btn' onClick={(e) => handleLogout(e)}>Logout</button> 
            </div>
            <Todos />
      </div>
  
    

  )
}

export default Dashboard