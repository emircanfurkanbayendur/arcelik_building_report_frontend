import React, { useEffect, useState } from 'react';
import Users from './Users';
import Roles from './Roles';
import { getUsers } from '../../api/user';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';




const UsersMain = () => {
 
  
    return (
        <Tabs
        defaultActiveKey="Users"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="Users" title="Users">
          <Users/>
        </Tab>
        <Tab eventKey="Roles" title="Roles">
          <Roles/>
        </Tab>
      
       
      </Tabs>
      )
   
 


};

export default UsersMain;
