import axios from 'axios';


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
    const refresh = () => window.location.reload(true)
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
