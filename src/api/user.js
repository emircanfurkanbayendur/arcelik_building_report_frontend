import { Refresh } from '@mui/icons-material';
import axios from 'axios';
const refresh = () => window.location.reload(true)
export const getUsers = ()  => {
 
    var resultData;
    let config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
    };
    const url = `${process.env.REACT_APP_BASE_URL}/api/User`;
     axios.get(url,config).then(async (result) => {
        
     
   
       
        localStorage.setItem("users",JSON.stringify(result.data));
     
     
       
 
        
    });
   
    return  resultData;
};
export const updateUserRole =  (id)  => {
    var resultData;
    let config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
    };
    const url = `${process.env.REACT_APP_BASE_URL}/api/User/changeRole/${id}`;
     axios.put(url,id,config).then(async (result) => {
        if(localStorage.getItem("users")!=null){
          
            getUsers();
           refresh();
           
         }
   
        
       
        
    });

    return  resultData;
};

export const updateUser = async ({
    id,
    firstName,
    lastName,
    email,
    password,
    
}) => {
    const user = {
        id,
        firstName,
        lastName,
        email,
        password,
        createdAt: new Date().toJSON(),
        isActive: true,
        roleId: 1,
        
     
    };
   
const url = `${process.env.REACT_APP_BASE_URL}/api/User`;

   await  axios.put(url, user,{ headers: {"Authorization" : ` Bearer ${localStorage.getItem("token")}`} }).then((result) => {
    
        const dt = result.data;
        localStorage.setItem(
            'user',
            JSON.stringify(dt)
        );
       
        
        refresh();
    });
   
};
export default  updateUser 
