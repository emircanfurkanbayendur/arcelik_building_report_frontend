import React, { useEffect, useState } from 'react';
import Users from './Users';
import { getUsers } from '../../api/user';


const UsersMain = () => {
    if (
        !localStorage.getItem('user') ||
        JSON.parse(localStorage.getItem('user')).roleId != 1
    ) {
        return window.location.replace('/auth');
    }
   if(localStorage.getItem('users')!=null){
    return (
        <div>
            
    <Users></Users>
        </div>
      )
   }
   else{
getUsers();
   }


};

export default UsersMain;
