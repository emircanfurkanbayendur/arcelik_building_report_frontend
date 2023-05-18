import { Refresh } from '@mui/icons-material';
import axios from 'axios';
const refresh = () => window.location.reload(true)
export const getUsers = async () => {
 
    var resultData;
    let config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
    };
    const url = `${process.env.REACT_APP_BASE_URL}/api/User`;
    await axios.get(url,config).then(async (result) => {
        
     
   
       
       
     
     
       resultData = result.data;
        
 
        
    });
return resultData;
};
export const updateUserRole = async (id)  => {
    var resultData;
    let config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
    };
    console.log(id);
    const url = `${process.env.REACT_APP_BASE_URL}/api/User/changeRole/${id}`;
     await axios.put(url,id,config).then( (result) => {
    return  result;
       
        
    });
    
};
export const getUserFromId = async (id) => {
 
    var resultData;
    let config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
    };
    const url = `${process.env.REACT_APP_BASE_URL}/api/User/${id}`;
    await axios.get(url,config).then(async (result) => {
        
     
   
       
       
     
   
       resultData = result.data;
        
 
        
    });
return resultData;
};
export const updateUser = async ({
    id,
    firstName,
    lastName,
    email,
   
    
}) => {
    console.log(firstName);
    const user = [
        {
         
          "path": "/firstName",
          "op": "replace",
          "value": firstName
        },
      {
         
          "path": "/LastName",
          "op": "replace",
          "value": lastName
        },
        {
         
            "path": "/Email",
            "op": "replace",
            "value": email
          }
      ];
   
const url = `${process.env.REACT_APP_BASE_URL}/api/User/${id}`;
let config = {
    headers: {
        Authorization: 'Bearer ' +localStorage.getItem('token'),
    },
};
   await  axios.patch(url,user,config).then((result) => {
    
        const dt = result.data;
      
        
      return dt;
    });

};
export default  updateUser 
