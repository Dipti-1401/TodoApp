import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout, selectUser } from '../redux/reducer';
import { motion } from "framer-motion";

import Todos from './Todos';
import DisplayTodos from './DisplayTodos';

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
            <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo App
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Todos />
        <DisplayTodos />
      </motion.div>
      </div>
  
    

  )
}

export default Dashboard